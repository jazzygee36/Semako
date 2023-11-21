import { z } from "zod";

export const SignUpValidation = z.object({
  firstName: z.string().min(3, { message: "First name is required" }).max(18),
  lastName: z.string().min(3, { message: "Last name is required" }).max(18),
  email: z.string().min(3, { message: "email name is required" }),
  password: z.string().min(3, { message: "password name is required" }).max(11),
  phoneNumber: z
    .string()
    .min(11, { message: "phone number name is required" })
    .max(12),
});

export const LoginValidation = z.object({
  firstName: z.string().min(3, { message: "email name is required" }),
  password: z.string().min(4, { message: "password name is required" }).max(18),
});
