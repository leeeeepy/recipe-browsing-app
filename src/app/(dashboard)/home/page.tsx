"use client";

import type React from "react";
import { Header } from "./_components/header";
import { RecipeList } from "./_components/recipeList";

export default function HomePage() {
  return (
    <div className="flex flex-col bg-gray-50">
      <Header />
      <RecipeList />
    </div>
  );
}
