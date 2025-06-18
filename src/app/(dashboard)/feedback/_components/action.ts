import { type FeedBackDetailsContextDTO } from "./context";

export async function submitFeedback({
  details,
}: {
  details: FeedBackDetailsContextDTO;
}) {
  const feedbackObj = {
    name: details.name,
    email: details.email,
    recipe: details.recipe,
    rating: details.rating,
    comment: details.comment,
  };
  console.log(feedbackObj);
  const response = await fetch("https://dummyjson.com/c/d742-fb1a-4950-904e", {
    method: "POST",
    // body: JSON.stringify(feedbackObj),
  });
  if (!response.ok) {
    throw new Error("Failed to submit feedback");
  }
  return {
    success: true,
    message: "Feedback submitted successfully",
  };
}
