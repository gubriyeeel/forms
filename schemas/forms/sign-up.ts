import { UserRegistrationProps } from "@/types/forms/sign-up";
import { z, ZodType } from "zod";

export const UserRegistrationSchema: ZodType<UserRegistrationProps> = z
  .object({
    email: z.string().email({ message: "Incorrect email format" }),
    confirmEmail: z.string().email({ message: "Incorrect email format" }),
    password: z
      .string()
      .min(8, { message: "Password must be atleast 8 characters long" })
      .max(64, {
        message: "Password can not be longer then 64 characters long",
      })
      .refine(
        (value) => /^[a-zA-Z0-9_.-]*$/.test(value ?? ""),
        "Password should contain alphabets and numbers only"
      ),
    confirmPassword: z.string(),
  })
  .refine((schema) => schema.password === schema.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })
  .refine((schema) => schema.email === schema.confirmEmail, {
    message: "Emails do not match",
    path: ["confirmEmail"],
  });
