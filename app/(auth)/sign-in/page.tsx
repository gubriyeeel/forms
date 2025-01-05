import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { SignInForm } from "@/components/forms/sign-in";
import { SignInFormProvider } from "@/components/forms/sign-in/form-provider";

export default function SignIn() {
  return (
    <SignInFormProvider>
      <Card>
        <CardHeader>
          <CardTitle>Sign-in</CardTitle>
          <CardDescription>Login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <SignInForm />
        </CardContent>
      </Card>
    </SignInFormProvider>
  );
}
