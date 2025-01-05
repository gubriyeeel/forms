"use client";

import { Loader } from "@/components/loader";
import { UserRegistrationSchema } from "@/schemas/forms/sign-up";
import { UserRegistrationProps } from "@/types/forms/sign-up";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

export function SignUpFormProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const methods = useForm<UserRegistrationProps>({
    resolver: zodResolver(UserRegistrationSchema),
    mode: "onChange",
  });

  const loading = methods.formState.isSubmitting;

  function onSubmit(values: UserRegistrationProps) {
    const formData = {
      ...values,
      type: "register"
    };
    console.log("Values submitted!", formData);
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
