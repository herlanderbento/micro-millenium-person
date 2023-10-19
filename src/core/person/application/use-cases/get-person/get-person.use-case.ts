import { IPersonRepository } from '../../../domain';
import { IUseCase } from '../../../../shared/application/use-cases';
import { NotFoundError } from '../../../../shared/domain';
import {
  PersonOutput,
  PersonOutputMapper,
  PersonAllOutput,
} from '../common';

export class GetPersonUseCase implements IUseCase<GetPersonInput, Output> {
  constructor(private personRepository: IPersonRepository) {}

  async execute(input: GetPersonInput): Promise<Output> {
    const entity = await this.personRepository.findById(input.id);

    return PersonOutputMapper.toAllOutput(entity);
  }
}

export type GetPersonInput = {
  id: string;
};

export type Output = PersonAllOutput;
