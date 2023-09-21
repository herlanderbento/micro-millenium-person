import { PersonPrismaRepository } from "../../../infra/db/prisma/person-prisma.repository";
import { UpdatePersonUseCase } from "../update-person.use-case";

export function makeUpdatePersonUseCase() {
  const repository = new PersonPrismaRepository();
  const useCase = new UpdatePersonUseCase(repository);

  return useCase;
}
