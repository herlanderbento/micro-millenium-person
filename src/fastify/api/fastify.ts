import fastify from 'fastify';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import fastifyCookie from '@fastify/cookie';
import { miraRoutes } from './routes';
import { ZodError } from 'zod';
import { redisClient } from '../../core/shared/infra/redis/redis-client';
import { swaggerOptions, swaggerUiOptions } from './swagger';

const app = fastify();

app.register(fastifySwagger, swaggerOptions as any);

app.register(fastifySwaggerUi, swaggerUiOptions);

app.register(fastifyCookie);

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
