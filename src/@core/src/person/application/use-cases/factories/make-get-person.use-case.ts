import { PersonPrismaRepository } from "../../../infra/db/prisma/person-prisma.repository";
import { GetPersonUseCase } from "../get-person.use-case";

export function makeGetPersonUseCase() {
  const repository = new PersonPrismaRepository();
  const useCase = new GetPersonUseCase(repository);

  return useCase;
}
