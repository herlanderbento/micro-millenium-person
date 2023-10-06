"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAvatarPersonSchema = exports.getAllPersonsSchema = exports.deletePersonSchema = exports.updatePersonSchema = exports.getPersonSchema = exports.listPersonsSchema = exports.createPersonSchema = void 0;
exports.createPersonSchema = {
    schema: {
        description: 'post some data',
        tags: ['Person'],
        summary: 'create a person',
        body: {
            type: 'object',
            properties: {
                userId: { type: 'string', format: 'uuid' },
                gender: { type: 'string' },
                address: { type: 'string' },
                birthdate: { type: 'string', format: 'date-time' },
                biography: { type: 'string' },
                shareableSection: { type: 'string' },
                isOpenToWork: { type: 'boolean' },
                isFreelancer: { type: 'boolean' },
            },
        },
        response: {
            201: {
                description: 'Successful response',
                type: 'object',
                properties: {
                    id: { type: 'string' },
                    userId: { type: 'string' },
                    gender: { type: 'string' },
                    address: { type: 'string' },
                    birthdate: { type: 'string', format: 'date-time' },
                    biography: { type: 'string' },
                    shareableSection: { type: 'string' },
                    isOpenToWork: { type: 'boolean' },
                    isFreelancer: { type: 'boolean' },
                    avatar: { type: 'string' },
                    createdAt: { type: 'string', format: 'date-time' },
                    updatedAt: { type: 'string', format: 'date-time' },
                },
            },
        },
    },
};
exports.listPersonsSchema = {
    schema: {
        description: 'post some data',
        tags: ['Person'],
        summary: 'list a persons',
        query: {
            type: 'object',
            properties: {
                page: {
                    type: 'string',
                },
                per_page: {
                    type: 'string',
                },
            },
        },
        response: {},
    },
};
exports.getPersonSchema = {
    schema: {
        description: 'post some data',
        tags: ['Person'],
        summary: 'get a person',
        params: {
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    format: 'uuid',
                    description: 'person id',
                },
            },
        },
        response: {
            200: {
                description: 'Successful response',
                type: 'object',
                properties: {
                    userId: { type: 'string', format: 'uuid' },
                    gender: { type: 'string' },
                    address: { type: 'string' },
                    birthdate: { type: 'string', format: 'date-time' },
                    biography: { type: 'string' },
                    shareableSection: { type: 'string' },
                    isOpenToWork: { type: 'boolean' },
                    isFreelancer: { type: 'boolean' },
                    avatar: { type: 'string' },
                    createdAt: { type: 'string', format: 'date-time' },
                    updatedAt: { type: 'string', format: 'date-time' },
                },
            },
        },
    },
};
exports.updatePersonSchema = {
    schema: {
        description: 'post some data',
        tags: ['Person'],
        summary: 'update a person',
        params: {
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    format: 'uuid',
                    description: 'person id',
                },
            },
        },
        body: {
            type: 'object',
            properties: {
                userId: { type: 'string', format: 'uuid' },
                gender: { type: 'string' },
                address: { type: 'string' },
                birthdate: { type: 'string', format: 'date-time' },
                biography: { type: 'string' },
                shareableSection: { type: 'string' },
                isOpenToWork: { type: 'boolean' },
                isFreelancer: { type: 'boolean' },
            },
        },
        response: {
            200: {
                description: 'Successful response',
                type: 'object',
                properties: {
                    userId: { type: 'string', format: 'uuid' },
                    gender: { type: 'string' },
                    address: { type: 'string' },
                    birthdate: { type: 'string', format: 'date-time' },
                    biography: { type: 'string' },
                    shareableSection: { type: 'string' },
                    isOpenToWork: { type: 'boolean' },
                    isFreelancer: { type: 'boolean' },
                    avatar: { type: 'string' },
                    createdAt: { type: 'string', format: 'date-time' },
                    updatedAt: { type: 'string', format: 'date-time' },
                },
            },
        },
    },
};
exports.deletePersonSchema = {
    schema: {
        description: 'post some data',
        tags: ['Person'],
        summary: 'delete a person',
        params: {
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    format: 'uuid',
                    description: 'person id',
                },
            },
        },
        response: {
            200: {
                description: 'Successful response',
                type: 'object',
                properties: {},
            },
        },
    },
};
exports.getAllPersonsSchema = {
    schema: {
        description: 'post some data',
        tags: ['Person'],
        summary: 'get all a persons',
        response: {},
    },
};
exports.updateAvatarPersonSchema = {
    schema: {
        description: 'post some data',
        tags: ['Person'],
        summary: 'update avatar a person',
        params: {
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    format: 'uuid',
                    description: 'person id',
                },
            },
        },
        body: {
            type: 'object',
            properties: {
                avatar: { type: 'string' },
            },
        },
        response: {
            200: {
                description: 'Successful response',
                type: 'object',
                properties: {
                    id: { type: 'string', format: 'uuid' },
                    userId: { type: 'string', format: 'uuid' },
                    gender: { type: 'string' },
                    address: { type: 'string' },
                    birthdate: { type: 'string', format: 'date-time' },
                    biography: { type: 'string' },
                    shareableSection: { type: 'string' },
                    isOpenToWork: { type: 'boolean' },
                    isFreelancer: { type: 'boolean' },
                    avatar: { type: 'string' },
                    createdAt: { type: 'string', format: 'date-time' },
                    updatedAt: { type: 'string', format: 'date-time' },
                },
            },
        },
    },
};
