import { IPersonRepository } from '../../../domain';
import { IUseCase } from '../../../../@seedwork/application/use-cases';
import { NotFoundError } from '../../../../@seedwork/domain';

export class DeletePersonUseCase
  implements IUseCase<DeletePersonInput, DeletePersonOutput>
{
  constructor(private personRepository: IPersonRepository) {}

  async execute(input: DeletePersonInput): Promise<DeletePersonOutput> {
    const entity = await this.personRepository.findById(input.id);

    if (!entity) {
      throw new NotFoundError('person not found');
    }

    await this.personRepository.delete(input.id);
  }
}

export type DeletePersonInput = {
  id: string;
};

export type DeletePersonOutput = void;
