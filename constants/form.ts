import { FormTypes } from "@/types/forms";

export const USER_LOGIN_FORM: FormTypes[] = [
  {
    id: "1",
    label: "Email",
    inputType: "input",
    placeholder: "Enter your email",
    name: "email",
    type: "email",
  },
  {
    id: "2",
    label: "Password",
    inputType: "input",
    placeholder: "Password",
    name: "password",
    type: "password",
  },
];

export const USER_REGISTRATION_FORM: FormTypes[] = [
  {
    id: "2",
    label: "Email",
    inputType: "input",
    placeholder: "Email",
    name: "email",
    type: "email",
  },
  {
    id: "3",
    label: "Confirm Email",
    inputType: "input",
    placeholder: "Confirm Email",
    name: "confirmEmail",
    type: "email",
  },
  {
    id: "4",
    label: "Password",
    inputType: "input",
    placeholder: "Password",
    name: "password",
    type: "password",
  },
  {
    id: "5",
    label: "Confirm Password",
    inputType: "input",
    placeholder: "Confrim Password",
    name: "confirmPassword",
    type: "password",
  },
];
