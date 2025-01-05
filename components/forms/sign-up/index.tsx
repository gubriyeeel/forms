"use client";

import { USER_REGISTRATION_FORM } from "@/constants/form";

import FormGenerator from "@/components/forms/form-generator";
import { useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function SignUpForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-4">
      {USER_REGISTRATION_FORM.map((field) => (
        <FormGenerator
          key={field.id}
          {...field}
          register={register}
          errors={errors}
          name={field.name}
        />
      ))}

      <div>
        <Button type="submit" className="w-full">
          Sign up
        </Button>
      </div>

      <div>
        <p className="text-center text-sm text-muted-foreground">
          Already have an account? Sign-in{" "}
          <Link
            href="/sign-in"
            className="underline underline-offset-2 hover:text-primary"
          >
            here
          </Link>
        </p>
      </div>
    </div>
  );
}
