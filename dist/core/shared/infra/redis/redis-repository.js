"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisRepository = void 0;
const redis_client_1 = require("./redis-client");
class RedisRepository {
    async get(key) {
        return await redis_client_1.redisClient.get(key);
    }
    async set(key, value, exp) {
        await redis_client_1.redisClient.setex(key, exp, value);
    }
}
exports.RedisRepository = RedisRepository;
