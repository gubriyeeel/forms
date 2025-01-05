/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from "react";

import { ErrorMessage } from "@hookform/error-message";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  type: "text" | "email" | "password";
  inputType: "select" | "input" | "textarea";
  options?: { value: string; label: string; id: string }[];
  label?: string;
  placeholder: string;
  register: UseFormRegister<any>;
  name: string;
  errors: FieldErrors<FieldValues>;
  lines?: number;
  form?: string;
  defaultValue?: string;
};

const FormGenerator = ({
  errors,
  inputType,
  name,
  placeholder,
  defaultValue,
  register,
  type,
  form,
  label,
  lines,
  options,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  switch (inputType) {
    case "input":
    default:
      return (
        <Label className="flex flex-col gap-2" htmlFor={`input-${label}`}>
          {label && label}
          <div className="relative">
            <Input
              id={`input-${label}`}
              type={type === "password" && showPassword ? "text" : type}
              placeholder={placeholder}
              form={form}
              defaultValue={defaultValue}
              {...register(name)}
              className="pr-10"
            />
            {type === "password" && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground text-xs"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            )}
          </div>
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-red-400">
                {message === "Required" ? "" : message}
              </p>
            )}
          />
        </Label>
      );
    case "select":
      return (
        <Label htmlFor={`select-${label}`}>
          {label && label}
          <select form={form} id={`select-${label}`} {...register(name)}>
            {options?.length &&
              options.map((option) => (
                <option value={option.value} key={option.id}>
                  {option.label}
                </option>
              ))}
          </select>
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-red-400">
                {message === "Required" ? "" : message}
              </p>
            )}
          />
        </Label>
      );
    case "textarea":
      return (
        <Label className="flex flex-col gap-2" htmlFor={`input-${label}`}>
          {label && label}
          <Textarea
            form={form}
            id={`input-${label}`}
            placeholder={placeholder}
            {...register(name)}
            rows={lines}
            defaultValue={defaultValue}
          />
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-red-400">
                {message === "Required" ? "" : message}
              </p>
            )}
          />
        </Label>
      );
  }
};

export default FormGenerator;
