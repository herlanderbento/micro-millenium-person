"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAvatarPersonSchema = exports.getAllPersonsSchema = exports.deletePersonSchema = exports.updatePersonSchema = exports.getPersonSchema = exports.listPersonsSchema = exports.createPersonSchema = void 0;
exports.createPersonSchema = {
    schema: {
        tags: ['Persons'],
        summary: 'create a person',
        body: {
            type: 'object',
            properties: {
                userId: { type: 'string', format: 'uuid' },
                gender: { type: 'string' },
                address: { type: 'string' },
                birthdate: { type: 'string', format: 'date-time' },
                biography: { type: 'string' },
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
        tags: ['Persons'],
        summary: 'list persons',
        query: {
            type: 'object',
            properties: {
                filter: {
                    type: 'string',
                },
                page: {
                    type: 'string',
                },
                per_page: {
                    type: 'string',
                },
                sort: {
                    type: 'string',
                },
                sort_dir: {
                    type: 'string',
                },
            },
        },
        response: {},
    },
};
exports.getPersonSchema = {
    schema: {
        tags: ['Persons'],
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
        tags: ['Persons'],
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
        tags: ['Persons'],
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
        tags: ['Persons'],
        summary: 'get all persons',
        response: {},
    },
};
exports.updateAvatarPersonSchema = {
    schema: {
        tags: ['Persons'],
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
