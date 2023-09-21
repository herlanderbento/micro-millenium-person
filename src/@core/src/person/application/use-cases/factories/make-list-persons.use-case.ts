import { PersonPrismaRepository } from "../../../infra/db/prisma/person-prisma.repository";
import { ListPersonUseCase } from "../list-persons.use-case";

export function makeListPersonUseCase() {
  const repository = new PersonPrismaRepository();
  const useCase = new ListPersonUseCase(repository);

  return useCase;
}
