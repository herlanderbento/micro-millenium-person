import { IEducationRepository } from '../../../domain';
import { IUseCase } from '../../../../shared/application/use-cases';
import {
  EducationOutputMapper,
  EducationOutput,
} from '../common/education-output';
import { NotFoundError } from '../../../../shared/domain';
import { UpdateEducationInput } from './update-education.input';

export class UpdateEducationUseCase
  implements IUseCase<UpdateEducationInput, UpdateEducationOutput>
{
  constructor(private educationRepository: IEducationRepository) {}

  async execute(input: UpdateEducationInput): Promise<UpdateEducationOutput> {
    const education = await this.educationRepository.findById(input.id);

    if (!education) {
      throw new NotFoundError('education not found');
    }

    education.update(input);

    if (input.isVerified === true) {
      education.verified();
    }

    if (input.isVerified === false) {
      education.unverified();
    }

    await this.educationRepository.update(education);

    return EducationOutputMapper.toOutput(education);
  }
}

export type UpdateEducationOutput = EducationOutput;
