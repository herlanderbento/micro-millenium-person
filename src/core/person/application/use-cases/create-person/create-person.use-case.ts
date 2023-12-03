import { Person, IPersonRepository } from '../../../domain';
import { IUseCase } from '../../../../shared/application/use-cases';
import { PersonOutputMapper, PersonOutput } from '../common';
import { CreatePersonInput } from './create-person.input';

export class CreatePersonUseCase
  implements IUseCase<CreatePersonInput, CreatePersonOutput>
{
  constructor(private personRepository: IPersonRepository) {}

  async execute(input: CreatePersonInput): Promise<CreatePersonOutput> {
    const entity = Person.create(input)

    await this.personRepository.insert(entity);

    return PersonOutputMapper.toOutput(entity);
  }
}

export type CreatePersonOutput = PersonOutput;
