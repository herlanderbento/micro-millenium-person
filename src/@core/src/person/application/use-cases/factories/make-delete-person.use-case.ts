import { PersonPrismaRepository } from "../../../infra/db/prisma/person-prisma.repository";
import { DeletePersonUseCase } from "../delete-person.use-case";

export function makeDeletePersonUseCase() {
  const repository = new PersonPrismaRepository();
  const useCase = new DeletePersonUseCase(repository);

  return useCase;
}
