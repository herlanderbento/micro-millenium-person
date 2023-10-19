import { IUseCase } from '../../../../shared/application';
import { NotFoundError } from '../../../../shared/domain';
import { IEducationRepository } from '../../../domain';
import { EducationOutput, EducationOutputMapper } from '../common';

export class GetEducationUseCase
  implements IUseCase<GetEducationInput, GetEducationOutput>
{
  constructor(private educationRepository: IEducationRepository) {}

  async execute(input: GetEducationInput): Promise<GetEducationOutput> {
    const education = await this.educationRepository.findById(input.id);

    if (!education) {
      throw new NotFoundError(`education not found`);
    }

    return EducationOutputMapper.toOutput(education);
  }
}

export type GetEducationInput = {
  id: string;
};

export type GetEducationOutput = EducationOutput;
