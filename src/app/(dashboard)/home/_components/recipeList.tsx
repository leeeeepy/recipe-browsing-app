import { useSearch } from "./hooks";
import { Button } from "@/components/retroui/Button";
import { Shuffle, Star, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/retroui/Card";
import { Badge } from "@/components/retroui/Badge";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
}

export function RecipeList() {
  const { search, recipesListData, randomRecipesListData, resetSearch } =
    useSearch();
  console.log("recipesListData", recipesListData);
  const router = useRouter();
  const featuredMeal = randomRecipesListData?.[0];
  const otherMeals = recipesListData?.slice(0, 9);

  return (
    <main className="container mx-auto p-4 md:p-6">
      <div className="mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl font-black uppercase mb-2">
          {search.search && (
            <div>
              SEARCH RESULTS FOR{" "}
              <span className="text-blue-600">
                "{search.search.toUpperCase()}"
              </span>
              <span className="text-sm font-normal ml-2 text-gray-600">
                ({recipesListData.length} recipe
                {recipesListData.length !== 1 ? "s" : ""} found)
              </span>
            </div>
          )}
          {!search.search && "DISCOVER AMAZING RECIPES"}
        </h2>
        <div className="w-20 h-2 bg-black mb-4"></div>
        {!search.search && (
          <p className="text-lg font-bold text-gray-700 mb-4">
            Explore our handpicked collection of delicious recipes from around
            the world!
          </p>
        )}
      </div>
      {recipesListData.length === 0 && (
        <div className="text-center py-20">
          <div className="text-6xl mb-6">🔍</div>
          <h3 className="text-2xl font-black uppercase mb-4">
            {search.search ? "NO RECIPES FOUND" : "SOMETHING WENT WRONG"}
          </h3>
          <p className="text-lg font-bold mb-6 text-gray-600">
            {search.search
              ? `We couldn't find any recipes matching "${search.search}". Try a different search term!`
              : "We're having trouble loading recipes right now. Please try again."}
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              variant="outline"
              className="border-2 border-black font-bold uppercase"
              onClick={() => {
                resetSearch();
                router.push("/");
              }}
            >
              <Shuffle className="h-4 w-4 mr-2" />
              TRY RANDOM RECIPES
            </Button>
            {search.search && (
              <Button
                className="bg-black text-white border-2 border-black font-bold uppercase"
                onClick={() => {
                  resetSearch();
                  router.push("/");
                }}
              >
                CLEAR SEARCH
              </Button>
            )}
          </div>
        </div>
      )}
      {!search.search && featuredMeal && (
        <div>
          <div className="mb-6">
            <h3 className="text-2xl font-black uppercase mb-2 flex items-center gap-2">
              <Star className="h-6 w-6 text-yellow-500" />
              {search.search ? "TOP RESULT" : "FEATURED RECIPE OF THE DAY"}
            </h3>
            <div className="w-20 h-2 bg-yellow-500"></div>
          </div>
          <Card
            className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 cursor-pointer group overflow-hidden"
            onClick={() => {
              router.push(`/home/details/${featuredMeal.idMeal}`);
            }}
          >
            <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 border-b-4 border-black p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  <span className="font-black uppercase">
                    {search.search
                      ? "BEST MATCH FOR YOUR SEARCH"
                      : "TODAY'S SPECIAL"}
                  </span>
                </div>
                <div className="bg-red-500 text-white px-3 py-1 border-2 border-black font-black uppercase text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  HOT!
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <picture>
                  <img
                    src={featuredMeal.strMealThumb}
                    alt={featuredMeal.strMeal}
                    className="w-full h-full object-cover border-r-0 lg:border-r-4 border-b-4 lg:border-b-0 border-black group-hover:scale-105 transition-transform duration-500"
                  />
                </picture>
                <div className="absolute top-4 left-4">
                  <div className="bg-black text-white border-2 border-white px-3 py-2 font-black uppercase shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                    #{featuredMeal.strCategory}
                  </div>
                </div>
              </div>
              <div className="p-6 lg:p-8 flex flex-col justify-center bg-white">
                <h2 className="text-2xl lg:text-4xl font-black uppercase mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                  {featuredMeal.strMeal}
                </h2>
                <div className="flex flex-row gap-3 mb-6">
                  <Badge className="bg-black text-white font-bold uppercase px-3 py-1 items-center">
                    {featuredMeal.strCategory}
                  </Badge>
                  <Badge className="flex flex-row items-center bg-gray-200 text-black border-2 border-black font-bold uppercase px-3 py-1">
                    <Users className="h-3 w-3 mr-1" />
                    {featuredMeal.strArea}
                  </Badge>
                </div>
                <p className="font-bold text-gray-700 mb-6 leading-relaxed text-justify">
                  {search.search &&
                    `This recipe perfectly matches your search for "${search.search}". A delicious and easy-to-make dish that's perfect for any occasion!`}
                  {!search.search &&
                    "This amazing recipe is our top pick for today! Easy to make, absolutely delicious, and perfect for any occasion. Don't miss out on this culinary adventure!"}
                </p>
              </div>
            </div>
          </Card>
        </div>
      )}
      {otherMeals?.length && otherMeals?.length > 0 && (
        <div className="flex flex-col mt-6">
          <div className="mb-6">
            {!search.search && (
              <div>
                <h3 className="text-2xl font-black uppercase mb-2">
                  MORE DELICIOUS RECIPES
                </h3>
                <div className="w-20 h-2 bg-black"></div>
              </div>
            )}
            <p className="mt-2 font-bold text-gray-600">
              {search.search &&
                `Found ${otherMeals?.length} more recipe${
                  otherMeals?.length !== 1 ? "s" : ""
                } matching your search`}
              {!search.search &&
                `Discover ${otherMeals?.length} more amazing recipes from our collection`}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {otherMeals?.map((meal: Meal, index: number) => (
              <Card
                onClick={() => {
                  router.push(`/home/details/${meal.idMeal}`);
                }}
                key={meal.idMeal}
                className="border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 cursor-pointer group"
              >
                <div className="relative overflow-hidden">
                  <picture>
                    <img
                      src={meal.strMealThumb ?? "/placeholder.svg"}
                      alt={meal.strMeal}
                      width={300}
                      height={300}
                      className="w-full h-60 object-cover border-b-4 border-black group-hover:scale-110 transition-transform duration-300"
                    />
                  </picture>
                  <div className="absolute top-2 right-2">
                    <div className="bg-yellow-300 border-2 border-black px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      <span className="font-black text-xs">#{index + 2}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-black text-sm uppercase mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                    {meal.strMeal}
                  </h4>

                  <div className="flex gap-2 mb-3 flex-wrap">
                    <Badge className="bg-black text-white font-bold uppercase text-xs px-2 py-1">
                      {meal.strCategory}
                    </Badge>
                    <Badge className="bg-gray-200 text-black border border-black font-bold uppercase text-xs px-2 py-1">
                      {meal.strArea}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
      {recipesListData.length && recipesListData.length > 0 && (
        <div className="text-center py-12">
          <Card className="border-4 border-black bg-gradient-to-r from-yellow-300 to-yellow-400 p-8">
            <h3 className="text-2xl font-black uppercase mb-4">
              HUNGRY FOR MORE?
            </h3>
            <p className="font-bold text-gray-700 mb-6">
              Discover thousands of amazing recipes from around the world!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                className="bg-black text-white border-2 border-black font-bold uppercase px-6 py-3"
                onClick={() => {
                  router.push("/");
                }}
              >
                <Shuffle className="h-4 w-4 mr-2" />
                GET RANDOM RECIPES
              </Button>
              <Button
                variant="outline"
                className="border-2 border-black font-bold uppercase px-6 py-3"
                onClick={() => {
                  router.push("/feedback");
                }}
              >
                SHARE FEEDBACK
              </Button>
            </div>
          </Card>
        </div>
      )}
    </main>
  );
}
