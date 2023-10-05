import { IPersonRepository } from '../../../domain';
import { IUseCase } from '../../../../shared/application/use-cases';
import { PersonOutput } from '../common';

export class GetAllPersonsUseCase
  implements IUseCase<GetAllPersonInput, GetAllPersonOutput>
{
  constructor(private personRepository: IPersonRepository) {}

  async execute(): Promise<GetAllPersonOutput> {
    const entity = await this.personRepository.findAll();
    return entity;
  }
}

export type GetAllPersonInput = void;

export type GetAllPersonOutput = PersonOutput[];
