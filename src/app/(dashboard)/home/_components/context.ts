import { atom } from "@/lib/atom";
export const initialRandomRecipes = {
  idMeal: "",
  strMeal: "",
  strMealAlternate: "",
  strCategory: "",
  strArea: "",
  strInstructions: "",
  strMealThumb: "",
  strTags: "",
  strYoutube: "",
};

export type RandomRecipesContextDTO = typeof initialRandomRecipes;
export const randomRecipesAtom = atom<RandomRecipesContextDTO[]>([]);

export const initialRecipesList = {
  idMeal: "",
  strMeal: "",
  strMealAlternate: "",
  strCategory: "",
  strArea: "",
  strInstructions: "",
  strMealThumb: "",
  strTags: "",
  strYoutube: "",
};

export type RecipesListContextDTO = typeof initialRecipesList;
export const RecipesListAtom = atom<RecipesListContextDTO[]>([]);

export const initialSearch = {
  search: "",
};

export type SearchContextDTO = typeof initialSearch;
export const searchAtom = atom<SearchContextDTO>(initialSearch);
