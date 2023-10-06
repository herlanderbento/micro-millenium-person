import { IRedisRepository } from "../../domain";
export declare class RedisRepository implements IRedisRepository {
    get(key: string): Promise<string>;
    set(key: string, value: any, exp: number): Promise<void>;
}
