import { z } from 'zod';
export declare const createPersonBodySchemaValidation: z.ZodObject<{
    userId: z.ZodString;
    gender: z.ZodEffects<z.ZodString, string, string>;
    address: z.ZodString;
    birthdate: z.ZodString;
    biography: z.ZodOptional<z.ZodString>;
    isOpenToWork: z.ZodOptional<z.ZodBoolean>;
    isFreelancer: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    userId?: string;
    gender?: string;
    address?: string;
    birthdate?: string;
    biography?: string;
    isOpenToWork?: boolean;
    isFreelancer?: boolean;
}, {
    userId?: string;
    gender?: string;
    address?: string;
    birthdate?: string;
    biography?: string;
    isOpenToWork?: boolean;
    isFreelancer?: boolean;
}>;
export declare const personIdSchemaValidation: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id?: string;
}, {
    id?: string;
}>;
export declare const updatePersonBodySchemaValidation: z.ZodObject<{
    gender: z.ZodEnum<["male", "female"]>;
    address: z.ZodString;
    birthdate: z.ZodString;
    biography: z.ZodOptional<z.ZodString>;
    isOpenToWork: z.ZodOptional<z.ZodBoolean>;
    isFreelancer: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    gender?: "male" | "female";
    address?: string;
    birthdate?: string;
    biography?: string;
    isOpenToWork?: boolean;
    isFreelancer?: boolean;
}, {
    gender?: "male" | "female";
    address?: string;
    birthdate?: string;
    biography?: string;
    isOpenToWork?: boolean;
    isFreelancer?: boolean;
}>;
export declare const updatePersonAvatarBodySchemaValidation: z.ZodObject<{
    avatar: z.ZodString;
}, "strip", z.ZodTypeAny, {
    avatar?: string;
}, {
    avatar?: string;
}>;
