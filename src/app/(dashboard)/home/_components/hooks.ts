import { useAtom } from "@/lib/atom";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import {
  initialSearch,
  randomRecipesAtom,
  RecipesListAtom,
  searchAtom,
} from "./context";

export function useSearch() {
  const [presearch, setPresearch] = useState("");
  const [search, setSearch] = useAtom(searchAtom);
  const [randomRecipes, setRandomRecipes] = useState(false);
  const [randomRecipesData, setRandomRecipesData] = useAtom(randomRecipesAtom);
  const [recipesListData, setRecipesListData] = useAtom(RecipesListAtom);

  function executeSearch() {
    setSearch({ search: presearch });
  }

  function resetSearch() {
    setSearch(initialSearch);
  }
  const {
    data: searchRecipes,
    error: searchRecipesError,
    isLoading: searchRecipesLoading,
  } = useQuery({
    queryKey: ["searchRecipes", search],
    queryFn: async (): Promise<MealDTO[]> => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("date", data);
      return data.meals || [];
    },
  });

  useEffect(() => {
    if (searchRecipes) {
      setRecipesListData(
        searchRecipes.map((meal) => {
          return {
            idMeal: meal?.idMeal ?? "",
            strMeal: meal?.strMeal ?? "",
            strMealAlternate: meal?.strMealAlternate ?? "",
            strCategory: meal?.strCategory ?? "",
            strArea: meal?.strArea ?? "",
            strInstructions: meal?.strInstructions ?? "",
            strMealThumb: meal?.strMealThumb ?? "",
            strTags: meal?.strTags ?? "",
            strYoutube: meal?.strYoutube ?? "",
          };
        })
      );
    }
  }, [searchRecipes]);

  const {
    data: randomRecipesListData,
    error: randomRecipesError,
    isLoading: randomRecipesLoading,
  } = useQuery({
    queryKey: ["randomRecipes"],
    queryFn: async (): Promise<MealDTO[]> => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data.meals || [];
    },
  });

  useEffect(() => {
    if (randomRecipesListData) {
      setRandomRecipesData(
        randomRecipesListData.map((randomMeal) => {
          return {
            idMeal: randomMeal?.idMeal ?? "",
            strMeal: randomMeal?.strMeal ?? "",
            strMealAlternate: randomMeal?.strMealAlternate ?? "",
            strCategory: randomMeal?.strCategory ?? "",
            strArea: randomMeal?.strArea ?? "",
            strInstructions: randomMeal?.strInstructions ?? "",
            strMealThumb: randomMeal?.strMealThumb ?? "",
            strTags: randomMeal?.strTags ?? "",
            strYoutube: randomMeal?.strYoutube ?? "",
          };
        })
      );
    }
  }, []);

  return {
    presearch,
    setPresearch,
    search,
    setSearch,
    executeSearch,
    resetSearch,
    randomRecipes,
    setRandomRecipes,
    recipesListData,
    setRecipesListData,
    randomRecipesData,
    setRandomRecipesData,
    randomRecipesListData,
    randomRecipesError,
    randomRecipesLoading,
    searchRecipes,
    searchRecipesError,
    searchRecipesLoading,
  };
}
