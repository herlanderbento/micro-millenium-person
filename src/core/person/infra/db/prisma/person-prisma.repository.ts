import {
  Person,
  PersonId,
  IPersonRepository,
  PersonSearchParams,
  PersonSearchResult,
} from '../../../domain';
import { prismaClient } from '../../../../shared/infra/prisma/prisma-client';
import { PersonPrismaMapper } from './person-prisma.mapper';
import { NotFoundError } from '../../../../shared/domain';

export class PersonPrismaRepository implements IPersonRepository {
  sortableFields: string[] = ['createdAt'];

  async create(entity: Person): Promise<void> {
    await prismaClient.person.create({
      data: PersonPrismaMapper.toModel(entity),
    });
  }

  async bulkCreate(entities: Person[]): Promise<void> {
    const modelsProps = entities.map((entity) =>
      PersonPrismaMapper.toModel(entity)
    );

    await prismaClient.person.createMany({
      data: modelsProps,
    });
  }

  async findById(id: string | PersonId): Promise<Person> {
    const _id = `${id}`;

    const model = await prismaClient.person.findUnique({
      where: { id: _id },
      include: {
        educations: true, 
      },
    });

    if (!model) {
      throw new NotFoundError(`Entity Not Found using ID ${_id}`);
    }

    return model as any
    return PersonPrismaMapper.toEntity(model);
  }

  async update(entity: Person): Promise<Person> {
    const model = await prismaClient.person.update({
      where: { id: entity.id },
      data: PersonPrismaMapper.toModel(entity),
    });
    return PersonPrismaMapper.toEntity(model);
  }

  async search(props: PersonSearchParams): Promise<PersonSearchResult> {
    const sortable = props.sort && this.sortableFields.includes(props.sort);

    const count = await prismaClient.person.count();

    const models = await prismaClient.person.findMany({
      orderBy: {
        [sortable ? props.sort : 'createdAt']: sortable
          ? props.sort_dir
          : 'desc',
      },
      skip: (props.page - 1) * props.per_page,
      take: props.per_page,
    });

    return new PersonSearchResult({
      items: models.map((model) => PersonPrismaMapper.toEntity(model)),
      total: count,
      current_page: props.page,
      per_page: props.per_page,
      sort: props.sort,
      sort_dir: props.sort_dir,
      filter: props.filter,
    });
  }

  async findAll(): Promise<Person[]> {
    const models = await prismaClient.person.findMany();

    return models.map(PersonPrismaMapper.toEntity);
  }

  async delete(id: string | PersonId): Promise<void> {
    const _id = `${id}`;
    await prismaClient.person.delete({ where: { id: _id } });
  }
}
