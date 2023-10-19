"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const fastify_1 = __importDefault(require("fastify"));
const swagger_1 = __importDefault(require("@fastify/swagger"));
const swagger_ui_1 = __importDefault(require("@fastify/swagger-ui"));
const cookie_1 = __importDefault(require("@fastify/cookie"));
const routes_1 = require("./routes");
const zod_1 = require("zod");
const redis_client_1 = require("../../core/shared/infra/redis/redis-client");
const swagger_2 = require("./swagger");
const domain_1 = require("../../core/shared/domain");
const app = (0, fastify_1.default)();
exports.app = app;
app.register(swagger_1.default, swagger_2.swaggerOptions);
app.register(swagger_ui_1.default, swagger_2.swaggerUiOptions);
app.register(cookie_1.default);
app.register(routes_1.personRoutes, { prefix: 'persons' });
app.register(routes_1.educationRoutes, { prefix: 'educations' });
app.setErrorHandler((error, _, reply) => {
    if (error instanceof zod_1.ZodError || error instanceof domain_1.NotFoundError) {
        return reply
            .status(400)
            .send({ message: 'Validation error.', issues: error.message });
    }
    return reply.status(500).send({ message: `Internal server error. ${error}` });
});
redis_client_1.redisClient.ping().then((result) => {
    if (result === 'PONG') {
        console.log('Connection to Redis is active.');
    }
    else {
        console.log('Connection to Redis is not active.');
    }
});
