import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { SignUpFormProvider } from "@/components/forms/sign-up/form-provider";
import { SignUpForm } from "@/components/forms/sign-up";

export default function SignUp() {
  return (
    <SignUpFormProvider>
      <Card>
        <CardHeader>
          <CardTitle>Sign-up</CardTitle>
          <CardDescription>Create an account</CardDescription>
        </CardHeader>
        <CardContent>
          <SignUpForm />
        </CardContent>
      </Card>
    </SignUpFormProvider>
  );
}
