"use client";

import { USER_PROFILE_FAVORITES } from "@/constants/form";
import FormGenerator from "@/components/forms/form-generator";
import { FormFieldProps } from "@/types/forms";

export function FavoritesForm({ register, errors }: FormFieldProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Favorites</h2>
      {USER_PROFILE_FAVORITES.map((field) => (
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
