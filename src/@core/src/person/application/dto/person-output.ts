import { GenderType, Person } from "../../domain";

export type PersonProps = {
  id: string;
  userId: string;
  gender: GenderType | string;
  location: string;
  birthdate: Date;
  biography?: string;
  shareableSection?: string;
  isOpenToWork?: boolean;
  isFreelancer?: boolean;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
};

export class PersonOutputMapper {
  static toOutput(entity: Person) {
    return entity.toJSON();
  }
}
