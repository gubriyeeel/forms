"use client";

import { Loader } from "@/components/loader";
import { UserLoginSchema } from "@/schemas/forms/sign-in";
import { UserLoginProps } from "@/types/forms/sign-in";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

export function SignInFormProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const methods = useForm<UserLoginProps>({
    resolver: zodResolver(UserLoginSchema),
    mode: "onChange",
  });

  const loading = methods.formState.isSubmitting;

  function onSubmit(values: UserLoginProps) {
    console.log("Values submitted!", values);
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div>
          <Loader loading={loading}>{children}</Loader>
        </div>
      </form>
    </FormProvider>
  );
}
