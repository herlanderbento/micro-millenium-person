import { z } from "zod";

const GENDER = ["male", "female"] as const;

export const createPersonBodySchemaValidation = z.object({
  userId: z
    .string({
      required_error: "userId is required",
      invalid_type_error: "userId must be a string",
    })
    .trim()
    .min(1, { message: "userId is required" }),
  gender: z.enum(GENDER),
  location: z
    .string({
      required_error: "location is required",
      invalid_type_error: "location must be a string",
    })
    .trim()
    .min(1, { message: "location is required" }),
  birthdate: z
    .string({
      required_error: "birthdate is required",
      invalid_type_error: "That's not a date!",
    })
    .trim()
    .min(1, { message: "birthdate is required" }),
  biography: z.string().optional(),
  shareableSection: z.string().optional(),
  isOpenToWork: z.boolean().optional(),
  isFreelancer: z.boolean().optional(),
});

export const personIdSchemaValidation = z.object({
  id: z
    .string({
      required_error: "userId is required",
      invalid_type_error: "userId must be a string",
    })
    .trim()
    .min(1, { message: "userId is required" }),
});

export const updatePersonBodySchemaValidation = z.object({
  gender: z.enum(GENDER),
  location: z
    .string({
      required_error: "location is required",
      invalid_type_error: "location must be a string",
    })
    .trim()
    .min(1, { message: "location is required" }),
  birthdate: z.string({
    required_error: "birthdate is required",
    invalid_type_error: "That's not a date!",
  })
  .trim()
  .min(1, { message: "birthdate is required" }),
  biography: z.string().optional(),
  shareableSection: z.string().optional(),
});
