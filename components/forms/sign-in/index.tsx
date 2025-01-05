"use client";

import { USER_LOGIN_FORM } from "@/constants/form";

import FormGenerator from "@/components/forms/form-generator";
import { useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function SignInForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-4">
      {USER_LOGIN_FORM.map((field) => (
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
          Sign in
        </Button>
      </div>

      <div>
        <p className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account? Sign-up{" "}
          <Link
            href="/sign-up"
            className="underline underline-offset-2 hover:text-primary"
          >
            here
          </Link>
        </p>
      </div>
    </div>
  );
}
