import { z, ZodType } from "zod";
import { UserLoginProps } from "@/types/forms/sign-in";

export const UserLoginSchema: ZodType<UserLoginProps> = z.object({
  email: z.string().email({ message: "Incorrect email format" }),
  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 characters long" })
    .max(64, {
      message: "Password can not be longer then 64 characters long",
    }),
});
