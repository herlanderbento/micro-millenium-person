import { IEducationRepository, Education } from "../../domain";
import { default as IUseCase } from "../../../@seedwork/application/use-cases";
import {
  EducationOutputMapper,
  EducationProps,
} from "../dtos/education-output";
import { IPersonRepository, PersonId } from "../../../person/domain";
import { NotFoundError } from "../../../@seedwork/domain";

export class CreateEducationUseCase
  implements IUseCase<CreateEducationInput, CreateEducationOutput>
{
  constructor(
    private educationRepository: IEducationRepository,
    private miraRepository: IPersonRepository
  ) {}

  async execute(input: CreateEducationInput): Promise<CreateEducationOutput> {
    // const miraFound = await this.miraRepository.findById(input.PersonId);

    // if (!miraFound) {
    //   throw new NotFoundError("Mira not found");
    // }

    const entity = Education.create(input);

    await this.educationRepository.create(entity);

    return EducationOutputMapper.toOutput(entity);
  }
}

export type CreateEducationInput = {
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
};

export type CreateEducationOutput = {
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
