import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useFeedback } from "./hooks";

export function FeedbackSuccessFrom() {
  const router = useRouter();
  const { resetDetails } = useFeedback();
  return (
    <div>
      <header className="border-b-4 border-black bg-yellow-300 p-4 md:p-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="border-2 border-black font-bold uppercase"
              onClick={() => router.push("/")}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              HOME
            </Button>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              <h1 className="text-lg md:text-2xl font-black uppercase tracking-tight">
                FEEDBACK SUBMITTED
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4 md:p-6">
        <div className="max-w-2xl mx-auto text-center py-12 md:py-20">
          <Card className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
            <div className="text-6xl md:text-8xl mb-6">🎉</div>
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-4">
              THANK YOU!
            </h2>
            <p className="text-lg md:text-xl font-bold mb-6 text-gray-700">
              Your feedback has been submitted successfully. We appreciate you
              taking the time to share your experience!
            </p>
            <div className="bg-yellow-300 border-2 border-black p-4 mb-6">
              <p className="font-bold uppercase">
                Your feedback helps other food lovers discover great recipes!
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button
                className="bg-black text-white border-2 border-black font-bold uppercase text-lg px-6 py-3"
                onClick={() => router.push("/")}
              >
                DISCOVER MORE RECIPES
              </Button>
              <Button
                variant="outline"
                className="border-2 border-black font-bold uppercase text-lg px-6 py-3"
                onClick={() => {
                  resetDetails();
                  router.push("/feedback");
                }}
              >
                LEAVE ANOTHER REVIEW
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
