import { Person as PersonModel } from '@prisma/client';
import { GenderType, Person, PersonId } from '../../../domain';

export class PersonPrismaMapper {
  static toModel(entity: Person) {
    return {
      id: entity.id,
      userId: entity.userId,
      gender: entity.gender,
      address: entity.address,
      birthdate: entity.birthdate,
      biography: entity.biography,
      shareableSection: entity.shareableSection,
      isOpenToWork: entity.isOpenToWork,
      isFreelancer: entity.isFreelancer,
      avatar: entity.avatar,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }

  static toEntity(model: PersonModel): Person {
    return new Person(
      {
        userId: model?.userId,
        gender: model?.gender as GenderType,
        address: model?.address,
        birthdate: model?.birthdate,
        biography: model?.biography,
        shareableSection: model?.shareableSection,
        isOpenToWork: model?.isOpenToWork,
        isFreelancer: model?.isFreelancer,
        avatar: model?.avatar,
        createdAt: model?.createdAt,
        updatedAt: model?.updatedAt,
      },
      new PersonId(model?.id)
    );
  }
}
