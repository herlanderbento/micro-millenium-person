import {
  Education,
  EducationId,
  EducationSearchParams,
  EducationSearchResult,
  IEducationRepository,
} from '../../../domain';
import { prismaClient } from '../../../../shared/infra/prisma/prisma-client';
import { EducationPrismaMapper } from './education-prisma.mapper';
import { NotFoundError } from '../../../../shared/domain';

export class EducationPrismaRepository implements IEducationRepository {
  sortableFields: string[] = ['title', 'createdAt'];

  async create(entity: Education): Promise<void> {
    await prismaClient.education.create({
      data: EducationPrismaMapper.toModel(entity),
    });
  }

  async bulkCreate(entities: Education[]): Promise<void> {
    const modelsProps = entities.map((entity) =>
      EducationPrismaMapper.toModel(entity)
    );
    
    await prismaClient.education.createMany({
      data: modelsProps,
    });
  }

  async findById(id: string | EducationId): Promise<Education> {
    const _id = `${id}`;

    const model = await prismaClient.education.findUnique({
      where: { id: _id },
    });

    return model ? EducationPrismaMapper.toEntity(model) : null;
  }

  async findAll(): Promise<Education[]> {
    const models = await prismaClient.education.findMany();

    return models.map((model) => {
      return EducationPrismaMapper.toEntity(model);
    });
  }

  async update(entity: Education): Promise<Education> {
    const model = await prismaClient.education.update({
      where: { id: entity.id },
      data: EducationPrismaMapper.toModel(entity),
    });

    return EducationPrismaMapper.toEntity(model);
  }

  async search(props: EducationSearchParams): Promise<EducationSearchResult> {
    const sortable = props.sort && this.sortableFields.includes(props.sort);
    const count = await prismaClient.education.count();

    const models = await prismaClient.education.findMany({
      ...(props.filter && {
        where: {
          title: {
            contains: props.filter,
            mode: 'insensitive',
          }
        },
      }),
      orderBy: {
        [sortable ? props.sort : 'createdAt']: sortable
          ? props.sort_dir
          : 'desc',
      },
      skip: (props.page - 1) * props.per_page,
      take: props.per_page,
    });

    return new EducationSearchResult({
      items: models.map((model) => EducationPrismaMapper.toEntity(model)),
      total: count,
      current_page: props.page,
      per_page: props.per_page,
      sort: props.sort,
      sort_dir: props.sort_dir,
      filter: props.filter,
    });
  }

  async delete(id: string | EducationId): Promise<void> {
    const _id = `${id}`;
    await prismaClient.education.delete({ where: { id: _id } });
  }

  protected async _get(id: string): Promise<Education> {
    try {
      const user = await prismaClient.education.findUnique({
        where: { id },
      });
      return EducationPrismaMapper.toEntity(user);
    } catch {
      throw new NotFoundError(`Education not found using ID ${id}`);
    }
  }
}
