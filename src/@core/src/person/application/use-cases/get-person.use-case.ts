import { IPersonRepository } from "../../domain";
import { default as DefaultUseCase } from "../../../@seedwork/application/use-cases";
import { PersonOutputMapper, PersonProps } from "../dto";

export class GetPersonUseCase implements DefaultUseCase<GetPersonInput, Output> {
  constructor(private personRepository: IPersonRepository) {}

  async execute(input: GetPersonInput): Promise<Output> {
    const entity = await this.personRepository.findById(input.id);

    return PersonOutputMapper.toOutput(entity);
  }
}

export type GetPersonInput = {
  id: string;
}

export type Output = PersonProps;
