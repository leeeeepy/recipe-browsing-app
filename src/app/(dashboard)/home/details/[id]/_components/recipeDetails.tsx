"use client";

import {
  Users,
  Globe,
  ChefHat,
  Youtube,
  ExternalLink,
  Heart,
  Loader2,
} from "lucide-react";
import Image from "next/image";
import { useRecipeDetails } from "./hooks";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Badge } from "@/components/retroui/Badge";
import { useRouter } from "next/navigation";

export default function RecipeDetails() {
  const { data, error, isLoading, ingredientsList } = useRecipeDetails();
  const router = useRouter();

  const ingredients = ingredientsList();
  const instructions = data?.strInstructions
    .split(/\r?\n/)
    .filter((step) => step.trim())
    .filter((step) => !step.match(/^STEP\s+\d+/i));

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-10 w-10 animate-spin" />
      </div>
    );
  } else if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-2xl font-bold">Sorry,Please try again.</p>
        <p className="text-lg font-bold">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto p-4 md:p-6">
        {data && !isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-20">
            {/* Image and Basic Info */}
            <div className="grid grid-cols-1 md:col-span-2">
              <Card className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-6 overflow-hidden">
                <div className="relative">
                  <Image
                    src={data?.strMealThumb || "/placeholder.svg"}
                    alt={data?.strMeal ?? ""}
                    width={600}
                    height={600}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h1 className="text-2xl md:text-3xl font-black uppercase mb-4 leading-tight">
                    {data?.strMeal}
                  </h1>
                  <div className="flex flex-row gap-3 mb-6">
                    <Badge className="flex flex-row bg-black text-white text-xs border-2 border-black font-bold uppercase">
                      <Globe className="h-4 w-4 mr-2" />
                      {data?.strArea}
                    </Badge>
                    <Badge className="flex flex-row bg-gray-200 text-black text-xs border-2 border-black font-bold uppercase">
                      <Users className="h-4 w-4 mr-2" />
                      {data?.strCategory}
                    </Badge>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    {data?.strYoutube && (
                      <a
                        href={data?.strYoutube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button className="w-full bg-red-500 hover:bg-red-600 border-2 border-black font-bold uppercase">
                          <Youtube className="h-4 w-4 mr-2" />
                          WATCH VIDEO
                        </Button>
                      </a>
                    )}
                    {data?.strSource && (
                      <a
                        href={data?.strSource}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button
                          variant="outline"
                          className="w-full border-2 border-black font-bold uppercase"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          ORIGINAL RECIPE
                        </Button>
                      </a>
                    )}
                    <Button
                      className="w-full bg-green-500 hover:bg-green-600 border-2 border-black font-bold uppercase"
                      onClick={() =>
                        router.push(`/feedback?recipe=${data?.strMeal}`)
                      }
                    >
                      <Heart className="h-4 w-4 mr-2" />
                      LEAVE FEEDBACK
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Ingredients and Instructions */}
            <div className="grid grid-cols-1 md:col-span-4 space-y-6">
              {/* Ingredients */}
              <Card className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="bg-yellow-300 border-b-4 border-black p-4">
                  <h2 className="text-xl md:text-2xl font-black uppercase flex items-center gap-2">
                    <ChefHat className="h-5 w-5" />
                    INGREDIENTS
                  </h2>
                </div>
                <div className="p-4 md:p-6">
                  <div className="grid md:grid-cols-2 gap-3">
                    {ingredients.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-3 bg-gray-50 border-2 border-gray-200 hover:border-black transition-colors"
                      >
                        <span className="font-bold uppercase text-sm md:text-base">
                          {item.ingredient}
                        </span>
                        <span className="font-bold text-gray-600 text-sm">
                          {item.measure}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Instructions */}
              <Card className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="bg-yellow-300 border-b-4 border-black p-4">
                  <h2 className="text-xl md:text-2xl font-black uppercase flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    COOKING INSTRUCTIONS
                  </h2>
                </div>
                <div className="p-4 md:p-6">
                  <div className="space-y-6">
                    {instructions?.map((step, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium leading-relaxed text-sm md:text-base">
                            {step}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
