import { GenderType, IPersonRepository } from "../../domain";
import { default as DefaultUseCase } from "../../../@seedwork/application/use-cases";
import { PersonOutputMapper, PersonProps } from "../dto";

export class UpdatePersonUseCase
  implements DefaultUseCase<UpdatePersonInput, UpdatePersonOutput>
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
  location: string;
  birthdate: Date;
  biography?: string;
  shareableSection?: string;
};

export type UpdatePersonOutput = PersonProps;
