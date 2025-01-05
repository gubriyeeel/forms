"use client";

import { USER_PROFILE_ADDRESS } from "@/constants/form";
import FormGenerator from "@/components/forms/form-generator";
import { FormFieldProps } from "@/types/forms";

export function AddressForm({ register, errors }: FormFieldProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Address Information</h2>
      {USER_PROFILE_ADDRESS.map((field) => (
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
