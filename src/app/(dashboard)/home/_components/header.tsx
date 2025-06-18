import { ChefHat, Search, BrushCleaning } from "lucide-react";
import { Button } from "@/components/retroui/Button";
import { Input } from "@/components/retroui/Input";
import { useSearch } from "./hooks";

export function Header() {
  const { presearch, setPresearch, executeSearch, resetSearch } = useSearch();

  return (
    <div>
      <div className="flex-1 min-w-0">
        <header className="border-b-4 border-black bg-yellow-300 p-4 md:p-6 sticky top-0 z-30">
          <div className="container mx-auto ">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 md:mb-6">
              <div className="flex items-center gap-3">
                <div className="bg-black text-white p-2 border-2 border-black">
                  <ChefHat className="h-6 w-6" />
                </div>
                <h1 className="text-2xl md:text-4xl font-black uppercase tracking-tight">
                  RETRO RECIPES
                </h1>
              </div>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="flex gap-2"
            >
              <div className="relative flex-1">
                <Input
                  name="q"
                  placeholder="Search for delicious recipes..."
                  defaultValue={presearch}
                  className="border-2 border-black font-bold placeholder:text-gray-500 h-12 text-base md:text-lg pl-12"
                  onChange={(e) => setPresearch(e.target.value)}
                />
                <Search className="absolute left-3 top-3 h-6 w-6 text-gray-600" />
              </div>
              <Button
                type="submit"
                className="bg-black text-white border-2 border-black font-bold uppercase h-12 px-4 md:px-6"
                onClick={() => executeSearch()}
              >
                <span className="hidden md:inline">SEARCH</span>
                <Search className="h-5 w-5 md:hidden" />
              </Button>
              <Button
                type="button"
                onClick={() => {
                  resetSearch();
                }}
                variant="outline"
                className="border-2 border-black font-bold uppercase h-12 px-3 md:px-4"
                title="Get random recipes"
              >
                <BrushCleaning className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </header>
      </div>
    </div>
  );
}
