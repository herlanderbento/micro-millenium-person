import { Education } from "../../domain/entities/education.entity";
import { PersonId } from "../../../person/domain";

export type EducationProps = {
  id: string;
  personId: PersonId | string;
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
};

export class EducationOutputMapper {
  static toOutput(entity: Education) {
    return entity.toJSON();
  }
}
