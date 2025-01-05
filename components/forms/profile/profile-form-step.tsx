"use client";

import { useFormContext } from "react-hook-form";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

import { BasicInformationForm } from "@/components/forms/profile/basic-information-form";
import { AddressForm } from "@/components/forms/profile/address-form";
import { FavoritesForm } from "@/components/forms/profile/favorites-form";
import { stepSchemas } from "./form-provider";
import { FormNotification } from "@/components/forms/form-notification";

export function ProfileFormStep() {
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    trigger,
  } = useFormContext();

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const currentStep = Number(searchParams.get("step")) || 1;

  const totalSteps = 3;

  const navigateToStep = async (step: number) => {
    if (step > currentStep) {
      // Get fields for current step
      const currentSchema =
        stepSchemas[currentStep as keyof typeof stepSchemas];
      const fieldsToValidate = Object.keys(currentSchema.shape);

      // Validate only the fields for the current step
      const isValid = await trigger(fieldsToValidate);
      if (!isValid) return;
    }

    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set("step", step.toString());
    router.replace(`${pathname}?${current.toString()}`);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <BasicInformationForm register={register} errors={errors} />
          </div>
        );
      case 2:
        return (
          <div>
            <AddressForm register={register} errors={errors} />
          </div>
        );
      case 3:
        return (
          <div>
            <FavoritesForm register={register} errors={errors} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      {renderStepContent()}

      {Object.keys(errors).length > 0 && (
        <FormNotification
          message="Please fill in all the required fields"
          type="error"
        />
      )}

      {isSubmitSuccessful && (
        <FormNotification
          message="Successfully updated your profile"
          type="success"
        />
      )}

      <div className="flex justify-between mt-6">
        {currentStep > 1 && (
          <Button
            type="button"
            variant="outline"
            onClick={() => navigateToStep(currentStep - 1)}
          >
            Previous
          </Button>
        )}

        {currentStep < totalSteps && (
          <Button type="button" onClick={() => navigateToStep(currentStep + 1)}>
            Next
          </Button>
        )}

        {currentStep === totalSteps && <Button type="submit">Submit</Button>}
      </div>
    </div>
  );
}
