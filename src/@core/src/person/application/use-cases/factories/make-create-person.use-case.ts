import { PersonPrismaRepository } from "../../../infra/db/prisma/person-prisma.repository";
import { CreatePersonUseCase } from "../create-person.use-case";

export function makeCreatePersonUseCase() {
  const repository = new PersonPrismaRepository();
  const useCase = new CreatePersonUseCase(repository);

  return useCase;
}
