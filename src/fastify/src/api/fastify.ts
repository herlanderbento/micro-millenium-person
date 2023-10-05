import fastify, { FastifyReply, FastifyRequest } from 'fastify';
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import fastifyCookie from '@fastify/cookie';
import { miraRoutes } from './routes';
import { ZodError } from 'zod';
import { redisClient } from '../../../core/src/shared/infra/redis/redis-client';

const app = fastify();

app.register(fastifySwagger, {
  mode: 'dynamic',
  openapi: {
    info: {
      title: 'Micro Millenium 27 API',
      // description: 'Testing the Fastify swagger API',
      version: '0.1.0',
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here',
    },
    host: 'localhost',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  },
});

app.register(fastifySwaggerUi, {
  routePrefix: '/swagger/docs',
  uiConfig: {
    // docExpansion: 'sort',
    deepLinking: false,
  },
  uiHooks: {
    onRequest: function (request: FastifyRequest, reply: FastifyReply, next) {
      next();
    },
    preHandler: function (request: FastifyRequest, reply: FastifyReply, next) {
      next();
    },
  },
  staticCSP: true,
  transformStaticCSP: (header) => header,
});

app.register(fastifyCookie as any);

app.register(miraRoutes, { prefix: 'person' });

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error.', issues: error.format() });
  }

  return reply.status(500).send({ message: `Internal server error. ${error}` });
});

redisClient.ping().then((result) => {
  if (result === 'PONG') {
    console.log('Connection to Redis is active.');
  } else {
    console.log('Connection to Redis is not active.');
  }
});

export { app };
