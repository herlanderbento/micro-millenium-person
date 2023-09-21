import { PersonRedisRepository } from "../../../infra";
import { GetAllPersonUseCase } from "../get-all-persons.use-case";

export function makeGetAllPersonUseCase() {
  const redisRepository = new PersonRedisRepository();
  //@ts-ignore
  const useCase = new GetAllPersonUseCase(redisRepository);

  return useCase;
}
