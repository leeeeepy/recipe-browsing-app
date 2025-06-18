"use client";

import type React from "react";
import { ArrowLeft, Star, Send, ChefHat, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Label } from "@/components/retroui/Label";
import { Input } from "@/components/retroui/Input";
import { Textarea } from "@/components/retroui/Textarea";
import { useFeedback } from "./hooks";
import { cn } from "@/lib/utils";

export default function FeedbackForm() {
  const searchParams = useSearchParams();
  const recipeName = searchParams.get("recipe") || "";
  const router = useRouter();
  const { mutate, details, setDetails, resetDetails } = useFeedback();

  if (details.isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50">
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b-4 border-black bg-yellow-300 p-4 md:p-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="border-2 border-black font-bold uppercase"
              onClick={() => router.push("/")}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              <span className="hidden md:inline">BACK</span>
            </Button>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              <h1 className="text-lg md:text-2xl font-black uppercase tracking-tight">
                RECIPE FEEDBACK
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="flex flex-col justify-center p-4 md:p-6 ">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-black uppercase mb-2">
              SHARE YOUR EXPERIENCE
            </h2>
            <div className="w-20 h-2 bg-black mb-4"></div>
            <p className="text-base md:text-lg font-bold text-gray-700">
              Help other food lovers by sharing your cooking experience! Your
              feedback is valuable to our community.
            </p>
          </div>

          <Card className="w-full border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="bg-yellow-300 border-b-4 border-black p-4">
              <div className="flex items-center gap-2">
                <ChefHat className="h-5 w-5" />
                <h3 className="text-lg font-black uppercase">FEEDBACK FORM</h3>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                mutate({ details });
              }}
              className="p-4 md:p-6 space-y-6"
            >
              {/* Name */}
              <div>
                <Label
                  htmlFor="name"
                  className="text-base md:text-lg font-black uppercase mb-2 block"
                >
                  YOUR NAME *
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={details.name}
                  onChange={(e) =>
                    setDetails({ ...details, name: e.target.value })
                  }
                  className={"border-2 font-bold h-12 text-base md:text-lg"}
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div>
                <Label
                  htmlFor="email"
                  className="text-base md:text-lg font-black uppercase mb-2 block"
                >
                  EMAIL ADDRESS *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={details.email}
                  onChange={(e) =>
                    setDetails({ ...details, email: e.target.value })
                  }
                  className={"border-2 font-bold h-12 text-base md:text-lg"}
                  placeholder="your@email.com"
                />
              </div>

              {/* Recipe */}
              <div>
                <Label
                  htmlFor="recipe"
                  className="text-base md:text-lg font-black uppercase mb-2 block"
                >
                  RECIPE NAME
                </Label>
                <Input
                  id="recipe"
                  name="recipe"
                  value={recipeName ?? details.recipe}
                  onChange={(e) =>
                    setDetails({ ...details, recipe: e.target.value })
                  }
                  className="border-2 border-black font-bold h-12 text-base md:text-lg"
                  placeholder="Which recipe are you reviewing?"
                />
              </div>

              {/* Rating */}
              <div>
                <Label className="text-base md:text-lg font-black uppercase mb-2 block">
                  RATING ({details.rating}/5 STARS)
                </Label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Button
                      key={star}
                      type="button"
                      onClick={() => setDetails({ ...details, rating: star })}
                      className={cn(
                        "w-12 h-12 border-2 border-black flex items-center justify-center transition-all hover:scale-110",
                        star <= details.rating
                          ? "bg-yellow-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                          : "bg-white hover:bg-gray-100"
                      )}
                    >
                      <Star
                        className={cn(
                          "h-6 w-6",
                          star <= details.rating ? "fill-current" : ""
                        )}
                      />
                    </Button>
                  ))}
                </div>
                <p className="text-sm font-bold text-gray-600 mt-2">
                  {details.rating === 1 && "Poor - Didn't like it"}
                  {details.rating === 2 && "Fair - It was okay"}
                  {details.rating === 3 && "Good - I liked it"}
                  {details.rating === 4 && "Very Good - Really enjoyed it"}
                  {details.rating === 5 && "Excellent - Absolutely loved it!"}
                </p>
              </div>

              {/* Comment */}
              <div>
                <Label
                  htmlFor="comment"
                  className="text-base md:text-lg font-black uppercase mb-2 block"
                >
                  YOUR FEEDBACK *
                </Label>
                <Textarea
                  id="comment"
                  name="comment"
                  value={details.comment}
                  onChange={(e: { target: { value: string } }) => {
                    setDetails((prev) => ({
                      ...prev,
                      comment: e.target.value,
                    }));
                  }}
                  rows={6}
                  className={
                    "border-2 font-bold text-base md:text-lg resize-none"
                  }
                  placeholder="Tell us about your cooking experience... Was it easy to follow? How did it taste? Any tips for other cooks?"
                />
                <div className="flex justify-between items-center mt-1">
                  <p className="text-sm font-bold text-gray-600 ml-auto">
                    {details.comment.length}/500 characters
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  className=" bg-green-500 hover:bg-green-600 border-2 border-black font-bold uppercase text-lg h-14 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  <Send className="h-5 w-5 mr-2" />
                  SUBMIT FEEDBACK
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </main>
    </div>
  );
}
