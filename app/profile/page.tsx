import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ProfileFormProvider } from "@/components/forms/profile/form-provider";
import { ProfileFormStep } from "@/components/forms/profile/profile-form-step";
import { Suspense } from "react";
import { Spinner } from "@/components/ui/spinner";

export default function Profile() {
  return (
    <ProfileFormProvider>
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Update your profile</CardDescription>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<Spinner />}>
            <ProfileFormStep />
          </Suspense>
        </CardContent>
      </Card>
    </ProfileFormProvider>
  );
}
