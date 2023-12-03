import { Person as PersonModel } from '@prisma/client';
import { GenderType, Person, PersonId } from '../../../domain';

interface EducationProps {
  id: string;
  personId: string;
  title: string;
  educationType: string;
  institute: string;
  address: string;
  startDate: Date;
  endDate: Date;
  description: string;
  isCurrent: boolean;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

type PersonOutput = {
  id: string;
  userId: string;
  gender: string;
  address: string;
  birthdate: Date;
  biography: string;
  isOpenToWork: boolean;
  isFreelancer: boolean;
  avatar: string;
  educations: Array<EducationProps>;
  createdAt: Date;
  updatedAt: Date;
};

export class PersonPrismaMapper {
  static toModel(entity: Person) {
    return {
      id: entity.id,
      userId: entity.userId,
      gender: entity.gender,
      address: entity.address,
      birthdate: entity.birthdate,
      biography: entity.biography,
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
        isOpenToWork: model?.isOpenToWork,
        isFreelancer: model?.isFreelancer,
        avatar: model?.avatar,
        createdAt: model?.createdAt,
        updatedAt: model?.updatedAt,
      },
      new PersonId(model?.id)
    );
  }

  static toAllModel(entity: PersonOutput) {
    return {
      id: entity.id,
      userId: entity.userId,
      gender: entity.gender,
      address: entity.address,
      birthdate: entity.birthdate,
      biography: entity.biography,
      isOpenToWork: entity.isOpenToWork,
      isFreelancer: entity.isFreelancer,
      avatar: entity.avatar,
      educations: entity.educations.map((data) => ({
        id: data.id,
        personId: String(data.personId),
        title: data.title,
        educationType: data.educationType,
        institute: data.institute,
        address: data.address,
        startDate: data.startDate,
        endDate: data.endDate,
        description: data.description,
        isCurrent: data.isCurrent,
        isVerified: data.isVerified,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
      })),
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
