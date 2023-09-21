import { IPersonRepository } from "../../domain";
import { default as DefaultUseCase } from "../../../@seedwork/application/use-cases";
import { NotFoundError } from "../../../@seedwork/domain";

export class DeletePersonUseCase
  implements DefaultUseCase<DeletePersonInput, DeletePersonOutput>
{
  constructor(private personRepository: IPersonRepository) {}

  async execute(input: DeletePersonInput): Promise<DeletePersonOutput> {
    const entity = await this.personRepository.findById(input.id);

    if (!entity) {
      throw new NotFoundError("Entity not found");
    }

    await this.personRepository.delete(input.id);
  }
}

export type DeletePersonInput = {
  id: string;
};

export type DeletePersonOutput = void;
