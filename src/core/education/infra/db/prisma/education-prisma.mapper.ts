import { Education, EducationId } from '../../../domain';
import { Education as EducationModel } from '@prisma/client';

export class EducationPrismaMapper {
  static toModel(entity: Education) {
    return {
      id: entity.id,
      personId: String(entity.personId),
      title: entity.title,
      educationType: entity.educationType,
      institute: entity.institute,
      address: entity.address,
      startDate: entity.startDate,
      endDate: entity.endDate,
      description: entity.description,
      isCurrent: entity.isCurrent,
      isVerified: entity.isVerified,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }

  static toEntity(model: EducationModel) {
    return new Education(
      {
        personId: model.personId,
        title: model.title,
        educationType: model.educationType,
        institute: model.institute,
        address: model?.address,
        description: model.description,
        isCurrent: model?.isCurrent,
        isVerified: model?.isVerified,
        startDate: model.startDate,
        endDate: model?.endDate,
        createdAt: model?.createdAt,
        updatedAt: model?.updatedAt,
      },
      new EducationId(model?.id)
    );
  }
}
