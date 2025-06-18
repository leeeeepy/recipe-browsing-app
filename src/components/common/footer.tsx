export function Footer() {
  return (
    <footer className="border-t-4 border-black bg-black text-white p-6 mt-20">
      <div className="flex flex-col mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center px-10">
          <div className="flex flex-col">
            <h4 className="font-black uppercase mb-2">RETRO RECIPES</h4>
            <p className="text-sm">
              Discover amazing recipes from around the world
            </p>
          </div>
          <div className="flex flex-col">
            <h4 className="font-black uppercase mb-2">POWERED BY</h4>
            <p className="text-sm">TheMealDB - Free Recipe API</p>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-6 pt-6 text-center">
          <p className="font-bold uppercase text-sm">
            © 2024 RETRO RECIPES - ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
