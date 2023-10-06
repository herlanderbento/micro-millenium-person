"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerUiOptions = exports.swaggerOptions = void 0;
exports.swaggerOptions = {
    mode: 'dynamic',
    openapi: {
        info: {
            title: 'Micro Millenium 27 API',
            version: '0.1.0',
        },
        externalDocs: {
            url: 'https://swagger.io',
            description: 'Find more info here',
        },
        host: 'localhost',
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json'],
    },
};
exports.swaggerUiOptions = {
    routePrefix: '/swagger/docs',
    exposeRoute: true,
};
