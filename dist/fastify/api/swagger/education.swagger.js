"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEducationSchema = exports.updateEducationSchema = exports.getEducationSchema = exports.listEducationsSchema = exports.createEducationSchema = void 0;
exports.createEducationSchema = {
    schema: {
        description: 'post some data',
        tags: ['Educations'],
        summary: 'create a education',
        body: {
            type: 'object',
            properties: {
                personId: { type: 'string', format: 'uuid' },
                title: { type: 'string' },
                institute: { type: 'string' },
                educationType: { type: 'string' },
                address: { type: 'string' },
                startDate: { type: 'string', format: 'date-time' },
                endDate: { type: 'string', format: 'date-time' },
                description: { type: 'string' },
                isCurrent: { type: 'boolean' },
                isVerified: { type: 'boolean' },
            },
        },
        response: {
            201: {
                description: 'Successful response',
                type: 'object',
                properties: {
                    id: { type: 'string' },
                    personId: { type: 'string', format: 'uuid' },
                    title: { type: 'string' },
                    institute: { type: 'string' },
                    educationType: { type: 'string' },
                    address: { type: 'string' },
                    startDate: { type: 'string', format: 'date-time' },
                    endDate: { type: 'string', format: 'date-time' },
                    description: { type: 'string' },
                    isCurrent: { type: 'boolean' },
                    isVerified: { type: 'boolean' },
                    createdAt: { type: 'string', format: 'date-time' },
                    updatedAt: { type: 'string', format: 'date-time' },
                },
            },
        },
    },
};
exports.listEducationsSchema = {
    schema: {
        description: 'post some data',
        tags: ['Educations'],
        summary: 'list a educations',
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
exports.getEducationSchema = {
    schema: {
        description: 'post some data',
        tags: ['Educations'],
        summary: 'get a education',
        params: {
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    format: 'uuid',
                    description: 'Education id',
                },
            },
        },
        response: {
            200: {
                description: 'Successful response',
                type: 'object',
                properties: {
                    id: { type: 'string' },
                    personId: { type: 'string', format: 'uuid' },
                    title: { type: 'string' },
                    institute: { type: 'string' },
                    educationType: { type: 'string' },
                    address: { type: 'string' },
                    startDate: { type: 'string', format: 'date-time' },
                    endDate: { type: 'string', format: 'date-time' },
                    description: { type: 'string' },
                    isCurrent: { type: 'boolean' },
                    isVerified: { type: 'boolean' },
                    createdAt: { type: 'string', format: 'date-time' },
                    updatedAt: { type: 'string', format: 'date-time' },
                },
            },
        },
    },
};
exports.updateEducationSchema = {
    schema: {
        description: 'post some data',
        tags: ['Educations'],
        summary: 'update a education',
        params: {
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    format: 'uuid',
                    description: 'education id',
                },
            },
        },
        body: {
            type: 'object',
            properties: {
                id: { type: 'string' },
                title: { type: 'string' },
                institute: { type: 'string' },
                educationType: { type: 'string' },
                address: { type: 'string' },
                startDate: { type: 'string', format: 'date-time' },
                endDate: { type: 'string', format: 'date-time' },
                description: { type: 'string' },
                isCurrent: { type: 'boolean' },
                isVerified: { type: 'boolean' },
            },
        },
        response: {
            200: {
                description: 'Successful response',
                type: 'object',
                properties: {
                    id: { type: 'string' },
                    personId: { type: 'string', format: 'uuid' },
                    title: { type: 'string' },
                    institute: { type: 'string' },
                    educationType: { type: 'string' },
                    address: { type: 'string' },
                    startDate: { type: 'string', format: 'date-time' },
                    endDate: { type: 'string', format: 'date-time' },
                    description: { type: 'string' },
                    isCurrent: { type: 'boolean' },
                    isVerified: { type: 'boolean' },
                    createdAt: { type: 'string', format: 'date-time' },
                    updatedAt: { type: 'string', format: 'date-time' },
                },
            },
        },
    },
};
exports.deleteEducationSchema = {
    schema: {
        description: 'post some data',
        tags: ['Educations'],
        summary: 'delete a education',
        params: {
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    format: 'uuid',
                    description: 'Education id',
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
