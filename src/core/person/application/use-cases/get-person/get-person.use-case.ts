import { IPersonRepository } from '../../../domain';
import { IUseCase } from '../../../../shared/application/use-cases';
import { PersonOutputMapper, PersonAllOutput } from '../common';

export class GetPersonUseCase implements IUseCase<GetPersonInput, Output> {
  constructor(private personRepository: IPersonRepository) {}

  async execute(input: GetPersonInput): Promise<Output> {
    const entity = await this.personRepository.findById(input.id, true);

    return PersonOutputMapper.toAllOutput(entity);
  }
}

export type GetPersonInput = {
  id: string;
};

export type Output = PersonAllOutput;
