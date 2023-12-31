import Redis from "ioredis";

export const redisClient = new Redis();

export class RedisService extends Redis{
  constructor() {
    super();
    super.on('error', (err) => {
      console.log('Error on Redis');
      console.log(err);
      process.exit(1);
    });

    super.on('connect', () => {
      console.log('Redis connected!');
    });
  }
}
