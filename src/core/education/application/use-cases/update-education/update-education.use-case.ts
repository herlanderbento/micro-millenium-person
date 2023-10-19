import { IEducationRepository } from '../../../domain';
import { IUseCase } from '../../../../shared/application/use-cases';
import {
  EducationOutputMapper,
  EducationOutput,
} from '../common/education-output';
import { UpdateEducationInput } from './update-education.input';

export class UpdateEducationUseCase
  implements IUseCase<UpdateEducationInput, UpdateEducationOutput>
{
  constructor(private educationRepository: IEducationRepository) {}

  async execute(input: UpdateEducationInput): Promise<UpdateEducationOutput> {
    const entity = await this.educationRepository.findById(input.id);
    entity.update(input);

    if (input.isVerified === true) {
      entity.verified();
    }

    if (input.isVerified === false) {
      entity.unverified();
    }

    await this.educationRepository.update(entity);

    return EducationOutputMapper.toOutput(entity);
  }
}

export type UpdateEducationOutput = EducationOutput;
