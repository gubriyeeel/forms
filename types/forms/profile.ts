import { UserProfileSchema } from "@/schemas/forms/profile";
import { z } from "zod";

export type UserProfileFormData = z.infer<typeof UserProfileSchema>;
