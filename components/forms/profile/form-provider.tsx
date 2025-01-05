/* eslint-disable react-hooks/exhaustive-deps */

"use client";

import { Loader } from "@/components/loader";
import {
  AddressSchema,
  BasicInfoSchema,
  FavoritesSchema,
  UserProfileSchema,
} from "@/schemas/forms/profile";
import { UserProfileFormData } from "@/types/forms/profile";
import {
  clearFormData,
  loadFormData,
  saveFormData,
} from "@/utils/form-storage";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

export const stepSchemas = {
  1: BasicInfoSchema,
  2: AddressSchema,
  3: FavoritesSchema,
};

export function ProfileFormProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const methods = useForm<UserProfileFormData>({
    resolver: zodResolver(UserProfileSchema),
    mode: "onChange",
  });

  const storageKey = "user-profile-data";

  // Load data on mount
  useEffect(() => {
    const savedData = loadFormData<UserProfileFormData>(storageKey);
    methods.reset(savedData);

    // Do not use "methods" as dependency, it will cause unnecessary re-renders
  }, []);

  // Save data on change
  useEffect(() => {
    const subscription = methods.watch((value) => {
      saveFormData(storageKey, value);
    });
    return () => subscription.unsubscribe();
  }, []);

  const onSubmit = async (values: UserProfileFormData) => {
    console.log("Form submitted with values:", values);
    clearFormData(storageKey);
  };

  const loading = methods.formState.isSubmitting;

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
