import { PrimaryButton } from "@/ui/buttons";
import { Spinner } from "@/ui/spinner";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <PrimaryButton type="submit" variant="large">
      {pending ? <Spinner /> : "Comment"}
    </PrimaryButton>
  );
}
