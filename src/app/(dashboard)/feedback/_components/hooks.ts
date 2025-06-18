import { useMutation } from "@tanstack/react-query";
import { submitFeedback } from "./action";
import { toast } from "sonner";
import { useAtom } from "@/lib/atom";
import {
  feedbackDetailsAtom,
  type FeedBackDetailsContextDTO,
  initialFeedbackDetails,
} from "./context";

export function useFeedback() {
  const [details, setDetails] = useAtom(feedbackDetailsAtom);
  const { mutate, isPending } = useMutation({
    mutationFn: ({ details }: { details: FeedBackDetailsContextDTO }) =>
      submitFeedback({ details }),
    onSuccess: () => {
      toast.success("Feedback submitted successfully");
      setDetails({ ...initialFeedbackDetails, isSubmitted: true });
    },
    onError: () => {
      toast.error("Failed to submit feedback");
    },
  });

  function resetDetails() {
    setDetails(initialFeedbackDetails);
  }
  return { mutate, isPending, details, setDetails, resetDetails };
}
