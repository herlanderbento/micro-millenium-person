import {
  convertToJSON,
  parseJSON,
  prismaClient,
  redisClient,
} from "../../../../@seedwork/infra";
import { IPersonRepository, Person } from "../../../domain";
import { PersonPrismaMapper } from "../prisma";

export class PersonRedisRepository implements Pick<IPersonRepository, "findAll"> {
  async findAll(): Promise<Person[]> {
    const redisKey = "cachedDataPerson";

    const cachedData = await redisClient.get(redisKey);

    if (cachedData) {
      return parseJSON(cachedData);
    }

    const entities = await prismaClient.person.findMany();

    await redisClient.setex(redisKey, 15, convertToJSON(entities));

    return entities.map(PersonPrismaMapper.toEntity);
  }
}
