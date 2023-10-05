import { GenderType, Person } from '../../../domain';

export type PersonOutput = {
  id: string;
  userId: string;
  gender: GenderType | string;
  address: string;
  birthdate: Date;
  biography?: string;
  shareableSection?: string;
  isOpenToWork?: boolean;
  isFreelancer?: boolean;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
};

export class PersonOutputMapper {
  static toOutput(entity: Person) {
    return entity.toJSON();
  }
}
