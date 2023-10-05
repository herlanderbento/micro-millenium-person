import { GenderType, IPersonRepository } from '../../../domain';
import { IUseCase } from '../../../../@seedwork/application/use-cases';
import { PersonOutput, PersonOutputMapper } from '../common';

export class UpdatePersonUseCase
  implements IUseCase<UpdatePersonInput, UpdatePersonOutput>
{
  constructor(private personRepository: IPersonRepository) {}

  async execute(input: UpdatePersonInput): Promise<UpdatePersonOutput> {
    const entity = await this.personRepository.findById(input.id);
    entity.update(input);

    await this.personRepository.update(entity);

    return PersonOutputMapper.toOutput(entity);
  }
}

export type UpdatePersonInput = {
  id: string;
  gender: GenderType;
  address: string;
  birthdate: Date;
  biography?: string;
  shareableSection?: string;
};

export type UpdatePersonOutput = PersonOutput;
