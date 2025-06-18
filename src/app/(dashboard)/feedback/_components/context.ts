import { atom } from "@/lib/atom";

export const initialFeedbackDetails = {
  name: "",
  email: "",
  recipe: "",
  rating: 0,
  comment: "",
  isSubmitted: false,
};
export type FeedBackDetailsContextDTO = typeof initialFeedbackDetails;
export const feedbackDetailsAtom = atom<FeedBackDetailsContextDTO>(
  initialFeedbackDetails
);
