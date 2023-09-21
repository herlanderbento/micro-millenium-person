import fastify from "fastify";
import fastifyCookie from "@fastify/cookie";
import { miraRoutes } from "./routes";
import { ZodError } from "zod";
import { redisClient } from "../../../@core/src/@seedwork/infra/redis/redis-client";

const app = fastify();

app.register(fastifyCookie as any);

app.register(miraRoutes, { prefix: "person" });

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: "Validation error.", issues: error.format() });
  }

  return reply.status(500).send({ message: `Internal server error.` });
});

redisClient.ping().then((result) => {
  if (result === "PONG") {
    console.log("Connection to Redis is active.");
  } else {
    console.log("Connection to Redis is not active.");
  }
});

export { app };
