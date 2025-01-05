import { z } from "zod";

// Reusable validation patterns
const phoneRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;

// Common validation messages
const required = "This field is required";
const invalid = (field: string) => `Invalid ${field.toLowerCase()}`;

// Base schemas for reusability
const nameSchema = z.string().min(1, { message: required });
const textSchema = z.string().min(1, { message: required });

export const UserProfileSchema = z.object({
  // Basic Information
  firstName: nameSchema,
  lastName: nameSchema,
  email: z.string().email({ message: invalid("email address") }),
  phone: z.string().regex(phoneRegex, { message: invalid("phone number") }),

  // Address Information
  streetAddress: textSchema,
  barangay: textSchema,
  city: textSchema,
  state: textSchema,
  postalCode: textSchema,
  country: textSchema,

  // Favorites
  interests: textSchema,
  hobbies: z
    .string()
    .min(3, { message: "Hobbies must be at least 3 characters" })
    .max(200, { message: "Hobbies cannot exceed 200 characters" }),
  bio: z
    .string()
    .min(10, { message: "Bio must be at least 10 characters" })
    .max(500, { message: "Bio cannot exceed 500 characters" }),
});

export const BasicInfoSchema = UserProfileSchema.pick({
  firstName: true,
  lastName: true,
  email: true,
  phone: true,
});

export const AddressSchema = UserProfileSchema.pick({
  streetAddress: true,
  barangay: true,
  city: true,
  state: true,
  postalCode: true,
  country: true,
});

export const FavoritesSchema = UserProfileSchema.pick({
  interests: true,
  hobbies: true,
  bio: true,
});
