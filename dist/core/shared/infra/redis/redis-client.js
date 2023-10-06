"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisService = exports.redisClient = void 0;
const ioredis_1 = __importDefault(require("ioredis"));
exports.redisClient = new ioredis_1.default();
class RedisService extends ioredis_1.default {
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
exports.RedisService = RedisService;
