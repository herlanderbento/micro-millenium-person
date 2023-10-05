import { app } from './fastify';

app
  .listen({
    // host: "0.0.0.0",
    port: 4001,
  })
  .then(() => {
    console.log('🚀 HTTP Server Running!');
  });
