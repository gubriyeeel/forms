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

export const USER_PROFILE_BASIC_INFO: FormTypes[] = [
  {
    id: "basic-1",
    label: "First Name",
    inputType: "input",
    placeholder: "Enter your first name",
    name: "firstName",
    type: "text",
  },
  {
    id: "basic-2",
    label: "Last Name",
    inputType: "input",
    placeholder: "Enter your last name",
    name: "lastName",
    type: "text",
  },
  {
    id: "basic-3",
    label: "Email",
    inputType: "input",
    placeholder: "Enter your email",
    name: "email",
    type: "email",
  },
  {
    id: "basic-4",
    label: "Phone",
    inputType: "input",
    placeholder: "Enter your phone number",
    name: "phone",
    type: "text",
  },
];

export const USER_PROFILE_ADDRESS: FormTypes[] = [
  {
    id: "address-1",
    label: "Street Address",
    inputType: "input",
    placeholder: "Enter your street address",
    name: "streetAddress",
    type: "text",
  },
  {
    id: "address-2",
    label: "Barangay",
    inputType: "input",
    placeholder: "Enter your barangay",
    name: "barangay",
    type: "text",
  },
  {
    id: "address-3",
    label: "City",
    inputType: "input",
    placeholder: "Enter your city",
    name: "city",
    type: "text",
  },
  {
    id: "address-4",
    label: "State/Province",
    inputType: "input",
    placeholder: "Enter your state or province",
    name: "state",
    type: "text",
  },
  {
    id: "address-5",
    label: "Postal Code",
    inputType: "input",
    placeholder: "Enter your postal code",
    name: "postalCode",
    type: "text",
  },
  {
    id: "address-6",
    label: "Country",
    inputType: "input",
    placeholder: "Enter your country",
    name: "country",
    type: "text",
  },
];

export const USER_PROFILE_FAVORITES: FormTypes[] = [
  {
    id: "favorites-2",
    label: "Hobbies",
    inputType: "input",
    placeholder: "Tell us about your hobbies",
    name: "hobbies",
    type: "text",
  },
  {
    id: "favorites-3",
    label: "Interests",
    inputType: "input",
    placeholder: "Tell us about your interests",
    name: "interests",
    type: "text",
  },
  {
    id: "favorites-4",
    label: "Bio",
    inputType: "textarea",
    placeholder: "Write a short bio about yourself",
    name: "bio",
    type: "text",
  },
];
