"use client";

import type React from "react";
import { Header } from "./_components/header";
import { RecipeList } from "./_components/recipeList";
import { Footer } from "@/components/common/footer";

export default function HomePage() {
  return (
    <div className="flex flex-col bg-gray-50">
      <Header />
      <RecipeList />
      {/* <Footer /> */}
    </div>
  );
}
