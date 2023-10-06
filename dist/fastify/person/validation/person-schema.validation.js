"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePersonAvatarBodySchemaValidation = exports.updatePersonBodySchemaValidation = exports.personIdSchemaValidation = exports.createPersonBodySchemaValidation = void 0;
const zod_1 = require("zod");
const GENDER = ['male', 'female'];
exports.createPersonBodySchemaValidation = zod_1.z.object({
    userId: zod_1.z
        .string({
        required_error: 'userId is required',
        invalid_type_error: 'userId must be a string',
    })
        .trim()
        .min(1, { message: 'userId is required' }),
    gender: zod_1.z.enum(GENDER),
    address: zod_1.z
        .string({
        required_error: 'address is required',
        invalid_type_error: 'address must be a string',
    })
        .trim()
        .min(1, { message: 'address is required' }),
    birthdate: zod_1.z
        .string({
        required_error: 'birthdate is required',
        invalid_type_error: "That's not a date!",
    })
        .trim()
        .min(1, { message: 'birthdate is required' }),
    biography: zod_1.z.string().optional(),
    shareableSection: zod_1.z.string().optional(),
    isOpenToWork: zod_1.z.boolean().optional(),
    isFreelancer: zod_1.z.boolean().optional(),
});
exports.personIdSchemaValidation = zod_1.z.object({
    id: zod_1.z
        .string({
        required_error: 'userId is required',
        invalid_type_error: 'userId must be a string',
    })
        .trim()
        .min(1, { message: 'userId is required' }),
});
exports.updatePersonBodySchemaValidation = zod_1.z.object({
    gender: zod_1.z.enum(GENDER),
    address: zod_1.z
        .string({
        required_error: 'address is required',
        invalid_type_error: 'address must be a string',
    })
        .trim()
        .min(1, { message: 'address is required' }),
    birthdate: zod_1.z
        .string({
        required_error: 'birthdate is required',
        invalid_type_error: "That's not a date!",
    })
        .trim()
        .min(1, { message: 'birthdate is required' }),
    biography: zod_1.z.string().optional(),
    shareableSection: zod_1.z.string().optional(),
});
exports.updatePersonAvatarBodySchemaValidation = zod_1.z.object({
    avatar: zod_1.z
        .string({
        required_error: 'avatar is required',
        invalid_type_error: 'avatar must be a string',
    })
        .trim()
        .min(1, { message: 'avatar is required' }),
});
