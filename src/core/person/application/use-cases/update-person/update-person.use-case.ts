import { IPersonRepository } from '../../../domain';
import { IUseCase } from '../../../../shared/application/use-cases';
import { PersonOutput, PersonOutputMapper } from '../common';
import { UpdatePersonInput } from './update-person.input';

export class UpdatePersonUseCase
  implements IUseCase<UpdatePersonInput, UpdatePersonOutput>
{
  constructor(private personRepository: IPersonRepository) {}

  async execute(input: UpdatePersonInput): Promise<UpdatePersonOutput> {
    const entity = await this.personRepository.findById(input.id, true);
    entity.update(input)
    
    await this.personRepository.update(entity);

    return PersonOutputMapper.toOutput(entity);
  }
}

export type UpdatePersonOutput = PersonOutput;
