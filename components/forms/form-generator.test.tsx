import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import FormGenerator from "@/components/forms/form-generator";
import { FieldError } from "react-hook-form";

describe("FormGenerator", () => {
  const mockRegister = vi.fn();
  const mockErrors = {};

  it("renders input field correctly", () => {
    render(
      <FormGenerator
        inputType="input"
        type="text"
        label="Test Input"
        name="testInput"
        placeholder="Enter test input"
        register={mockRegister}
        errors={mockErrors}
      />
    );

    expect(screen.getByLabelText("Test Input")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter test input")).toBeInTheDocument();
  });

  it("displays error message when provided", () => {
    const errorsWithMessage: Record<string, FieldError> = {
      testInput: {
        type: "required",
        message: "This field is required",
      },
    };

    render(
      <FormGenerator
        inputType="input"
        type="text"
        label="Test Input"
        name="testInput"
        placeholder="Enter test input"
        register={mockRegister}
        errors={errorsWithMessage}
      />
    );

    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });

  it("renders password field with toggle button", () => {
    render(
      <FormGenerator
        inputType="input"
        type="password"
        label="Password"
        name="password"
        placeholder="Enter password"
        register={mockRegister}
        errors={mockErrors}
      />
    );

    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
