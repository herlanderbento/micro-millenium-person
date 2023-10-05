import { IRedisRepository } from "../../domain";
import { redisClient } from "./redis-client";

export class RedisRepository implements IRedisRepository {
  async get(key: string): Promise<string> {
    return await redisClient.get(key);
  }
  async set(key: string, value: any, exp: number): Promise<void> {
    await redisClient.setex(key, exp, value);
  }
}
