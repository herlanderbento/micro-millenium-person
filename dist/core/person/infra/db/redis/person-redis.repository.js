"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonRedisRepository = void 0;
const infra_1 = require("../../../../shared/infra");
const prisma_1 = require("../prisma");
class PersonRedisRepository {
    async findAll() {
        const redisKey = "cachedDataPerson";
        const cachedData = await infra_1.redisClient.get(redisKey);
        if (cachedData) {
            return (0, infra_1.parseJSON)(cachedData);
        }
        const entities = await infra_1.prismaClient.person.findMany();
        await infra_1.redisClient.setex(redisKey, 15, (0, infra_1.convertToJSON)(entities));
        return entities.map(prisma_1.PersonPrismaMapper.toEntity);
    }
}
exports.PersonRedisRepository = PersonRedisRepository;
