import { GenderType, Person } from '../../../domain';

interface EducationProps {
  id: string;
  personId: string;
  title: string;
  educationType: string;
  institute: string;
  address?: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  isCurrent?: boolean;
  isVerified?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export type PersonOutput = {
  id: string;
  userId: string;
  gender: GenderType | string;
  address: string;
  birthdate: Date;
  biography?: string;
  isOpenToWork?: boolean;
  isFreelancer?: boolean;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type PersonAllOutput = {
  id: string;
  userId: string;
  gender: GenderType | string;
  address: string;
  birthdate: Date;
  biography?: string;
  isOpenToWork?: boolean;
  isFreelancer?: boolean;
  avatar?: string;
  educations?: Array<EducationProps>;
  createdAt: Date;
  updatedAt: Date;
};

export class PersonOutputMapper {
  static toOutput(entity: Person) {
    return entity.toJSON();
  }

  static toAllOutput(entity: PersonAllOutput) {
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
      educations: entity.educations?.map((item) => ({
        id: item.id,
        personId: item.personId,
        title: item.title,
        educationType: item.educationType,
        institute: item.institute,
        address: item.address,
        startDate: item.startDate,
        endDate: item.endDate,
        description: item.description,
        isCurrent: item.isCurrent,
        isVerified: item.isVerified,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
      })),
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
