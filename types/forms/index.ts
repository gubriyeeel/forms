export type FormTypes = {
  id: string;
  type: "email" | "text" | "password";
  inputType: "select" | "input";
  options?: { value: string; label: string; id: string }[];
  label?: string;
  placeholder: string;
  name: string;
};
