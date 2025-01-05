"use client";

import { USER_PROFILE_BASIC_INFO } from "@/constants/form";
import FormGenerator from "@/components/forms/form-generator";
import { FormFieldProps } from "@/types/forms";

export function BasicInformationForm({ register, errors }: FormFieldProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Basic Information</h2>
      {USER_PROFILE_BASIC_INFO.map((field) => (
        <FormGenerator
          key={field.id}
          {...field}
          register={register}
          errors={errors}
          name={field.name}
        />
      ))}
    </div>
  );
}
