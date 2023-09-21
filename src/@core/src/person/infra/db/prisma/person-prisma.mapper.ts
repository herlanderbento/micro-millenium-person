import { GenderType, Person, PersonId } from "../../../domain";
import { Person as PersonModel } from "@prisma/client";

export class PersonPrismaMapper {
  static toModel(entity: Person) {
    return {
      id: entity.id,
      userId: entity.userId,
      gender: entity.gender,
      location: entity.location,
      birthdate: entity.birthdate,
      biography: entity.biography,
      shareableSection: entity.shareableSection,
      isOpenToWork: entity.isOpenToWork,
      isFreelancer: entity.isFreelancer,
      image: entity.image,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }

  static toEntity(model: PersonModel) {
    return new Person(
      {
        userId: model.userId,
        gender: model.gender as GenderType,
        location: model.location,
        birthdate: model.birthdate,
        biography: model.biography,
        shareableSection: model.shareableSection,
        isOpenToWork: model.isOpenToWork,
        isFreelancer: model.isFreelancer,
        image: model.image,
        createdAt: model.createdAt,
        updatedAt: model.updatedAt,
      },
      new PersonId(model.id)
    );
  }
}
