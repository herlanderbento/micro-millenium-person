import { IUseCase } from '../../../../shared/application';
import { NotFoundError } from '../../../../shared/domain';
import { IEducationRepository } from '../../../domain';

export class DeleteEducationUseCase
  implements IUseCase<DeleteEducationInput, DeleteEducationOutput>
{
  constructor(private educationRepository: IEducationRepository) {}

  async execute(input: DeleteEducationInput): Promise<DeleteEducationOutput> {
    const education = await this.educationRepository.findById(input.id);

    if (!education) {
      throw new NotFoundError(
        `${education.title} Not Found using ID ${input.id}`
      );
    }

    await this.educationRepository.delete(input.id);
  }
}

export type DeleteEducationInput = {
  id: string;
};

export type DeleteEducationOutput = void;
