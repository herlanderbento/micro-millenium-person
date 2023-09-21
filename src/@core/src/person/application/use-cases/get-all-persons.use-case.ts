import { IPersonRepository } from "../../domain";
import { default as DefaultUseCase } from "../../../@seedwork/application/use-cases";
import { PersonProps } from "../dto";

export class GetAllPersonUseCase
  implements DefaultUseCase<GetAllPersonInput, GetAllPersonOutput>
{
  constructor(private personRepository: IPersonRepository) {}

  async execute(): Promise<GetAllPersonOutput> {
    const entity = await this.personRepository.findAll();
    return entity;
  }
}

export type GetAllPersonInput = void;

export type GetAllPersonOutput = PersonProps[];
