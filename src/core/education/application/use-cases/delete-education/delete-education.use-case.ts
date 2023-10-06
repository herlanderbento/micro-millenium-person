import { IUseCase } from '../../../../shared/application';
import { NotFoundError } from '../../../../shared/domain';
import { IEducationRepository } from '../../../domain';

export class DeleteEductionUseCase
  implements IUseCase<DeleteEducationInput, DeleteEducationOutput>
{
  constructor(private educationRepository: IEducationRepository) {}

  async execute(input: DeleteEducationInput): Promise<DeleteEducationOutput> {
    const entity = await this.educationRepository.findById(input.id);

    if (!entity) {
      throw new NotFoundError('education not found');
    }

    await this.educationRepository.delete(input.id);
  }
}

export type DeleteEducationInput = {
  id: string;
};

export type DeleteEducationOutput = void;
