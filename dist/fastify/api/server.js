"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = require("./fastify");
fastify_1.app
    .listen({
    port: 4001,
})
    .then(() => {
    console.log('🚀 HTTP Server Running!');
});
