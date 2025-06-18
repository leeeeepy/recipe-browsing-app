import { Suspense } from "react";
import FeedbackForm from "./_components/feedbackForm";

export default function Page() {
  return (
    <Suspense>
      <FeedbackForm />
    </Suspense>
  );
}
