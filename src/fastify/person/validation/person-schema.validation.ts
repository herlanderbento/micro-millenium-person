import { z } from 'zod';
import { CreatePersonInput } from '../../../core/person/application';
import { values } from 'lodash';

const GENDER = ['male', 'female'] as const;

export const createPersonBodySchemaValidation = z.object({
  userId: z
    .string({
      required_error: 'userId is required',
      invalid_type_error: 'userId must be a string',
    })
    .trim()
    .min(1, { message: 'userId is required' }),
  gender: z.string().refine((value) => value === 'male' || value === 'female', {
    message: "gender must be 'male' or 'female'",
  }),
  address: z
    .string({
      required_error: 'address is required',
      invalid_type_error: 'address must be a string',
    })
    .trim()
    .min(1, { message: 'address is required' }),
  birthdate: z.string({
    required_error: 'birthdate is required',
    invalid_type_error: "That's not a date!",
  }),
  biography: z.string().optional(),
  isOpenToWork: z.boolean().optional(),
  isFreelancer: z.boolean().optional(),
});

export const personIdSchemaValidation = z.object({
  id: z
    .string({
      required_error: 'userId is required',
      invalid_type_error: 'userId must be a string',
    })
    .trim()
    .min(1, { message: 'userId is required' }),
});

export const updatePersonBodySchemaValidation = z.object({
  gender: z.enum(GENDER),
  address: z
    .string({
      required_error: 'address is required',
      invalid_type_error: 'address must be a string',
    })
    .trim()
    .min(1, { message: 'address is required' }),
  birthdate: z
    .string({
      required_error: 'birthdate is required',
      invalid_type_error: "That's not a date!",
    })
    .trim()
    .min(1, { message: 'birthdate is required' }),
  biography: z.string().optional(),
  isOpenToWork: z.boolean().optional(),
  isFreelancer: z.boolean().optional(),
});

export const updatePersonAvatarBodySchemaValidation = z.object({
  avatar: z
    .string({
      required_error: 'avatar is required',
      invalid_type_error: 'avatar must be a string',
    })
    .trim()
    .min(1, { message: 'avatar is required' }),
});
