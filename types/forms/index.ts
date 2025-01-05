import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export type FormTypes = {
  id: string;
  type: "email" | "text" | "password";
  inputType: "select" | "input" | "textarea";
  options?: { value: string; label: string; id: string }[];
  label?: string;
  placeholder: string;
  name: string;
  lines?: number;
};

export type FormFieldProps = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
};
