import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ProfileFormProvider } from "@/components/forms/profile/form-provider";
import { ProfileFormStep } from "@/components/forms/profile/profile-form-step";

export default function Profile() {
  return (
    <ProfileFormProvider>
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Update your profile</CardDescription>
        </CardHeader>
        <CardContent>
          <ProfileFormStep />
        </CardContent>
      </Card>
    </ProfileFormProvider>
  );
}
