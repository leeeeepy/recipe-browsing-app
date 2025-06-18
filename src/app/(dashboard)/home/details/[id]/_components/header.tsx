"use client";
import { Button } from "@/components/retroui/Button";
import { ArrowLeft, ChefHat } from "lucide-react";
import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();
  return (
    <header className="border-b-4 border-black bg-yellow-300 p-4 md:p-6 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex flex-row items-center gap-4">
          <Button
            variant="outline"
            className="border-2 border-black font-bold uppercase"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span className="hidden md:inline">BACK</span>
            <span className="md:hidden">BACK</span>
          </Button>
          <div className="flex items-center gap-2">
            <ChefHat className="h-5 w-5" />
            <h1 className="text-lg md:text-2xl font-black uppercase tracking-tight">
              RECIPE DETAILS
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}
