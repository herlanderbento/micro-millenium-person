import { IEducationRepository, Education } from '../../../domain';
import { IUseCase } from '../../../../shared/application/use-cases';
import { EducationOutputMapper, EducationOutput } from '../common';
import { IPersonRepository } from '../../../../person/domain';
import { CreateEducationInput } from './create-education.input';

export class CreateEducationUseCase
  implements IUseCase<CreateEducationInput, CreateEducationOutput>
{
  constructor(
    private educationRepository: IEducationRepository,
    private personRepository: IPersonRepository
  ) {}

  async execute(input: CreateEducationInput): Promise<CreateEducationOutput> {
    await this.personRepository.findById(input.personId);
    const education = Education.create(input);

    await this.educationRepository.insert(education);

    return EducationOutputMapper.toOutput(education);
  }
}

export type CreateEducationOutput = EducationOutput;
