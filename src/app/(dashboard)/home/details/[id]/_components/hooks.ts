import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export function useRecipeDetails() {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery({
    queryKey: ["recipeDetails", id],
    queryFn: async (): Promise<MealDetailsDTO> => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data.meals?.[0] || null;
    },
  });

  const ingredientsList = (): Array<{
    ingredient: string;
    measure: string;
  }> => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = data?.[`strIngredient${i}`];
      const measure = data?.[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push({
          ingredient: ingredient.trim(),
          measure: measure?.trim() || "",
        });
      }
    }
    return ingredients;
  };
  return { data, error, isLoading, ingredientsList };
}
