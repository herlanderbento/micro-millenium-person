import { Person, IPersonRepository } from "../../domain";
import { default as DefaultUseCase } from "../../../@seedwork/application/use-cases";
import { PersonOutputMapper, PersonProps } from "../dto";

export class CreatePersonUseCase
  implements DefaultUseCase<CreatePersonInput, CreatePersonOutput>
{
  constructor(private personRepository: IPersonRepository) {}

  async execute(input: CreatePersonInput): Promise<CreatePersonOutput> {
    const entity = new Person(input);

    await this.personRepository.create(entity);

    return PersonOutputMapper.toOutput(entity);
  }
}

export type CreatePersonInput = Omit<
  PersonProps,
  "id" | "createdAt" | "updatedAt" | "image"
>;

export type CreatePersonOutput = PersonProps;