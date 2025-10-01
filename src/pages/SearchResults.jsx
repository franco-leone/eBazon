import { useState } from "react";

function SearchResults() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const filters = [];

  const toggleFilter = (filter) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div className="flex">
      <div className="hidden lg:flex lg:flex-col lg:w-2/7">
        <div className="p-5">FILTROS</div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex w-full mt-2 pt-5 pl-5 pr-6 justify-between">
          <h1 className="text-3xl">Resultados</h1>
          <div className="flex items-center">
            <p className="text-neutral-300">View as</p>
            <button className="hover:bg-neutral-600 ml-5 cursor-pointer flex items-center justify-center bg-neutral-700 md:h-10 md:w-10 rounded-l-lg">
              <span className="material-symbols-rounded">list</span>
            </button>
            <button className="hover:bg-neutral-600 cursor-pointer flex items-center justify-center bg-neutral-700 md:h-10 md:w-10 rounded-r-lg">
              <span className="material-symbols-rounded">grid_view</span>
            </button>
          </div>
        </div>
        <div className="grid gap-5 grid-cols-1 w-full h-fit p-6">
          <div className="flex bg-neutral-800 w-full h-40 md:h-55 p-5 rounded-lg items-center">
            <img
              src="\notChatGPT Image Sep 21, 2025, 10_54_29 PM.png"
              className="h-32 md:h-45 aspect-square"
            ></img>
            <div className="flex flex-col ml-4 gap-3">
              <h1 className="text-lg md:text-xl">PRODUCTO</h1>
              <p className="text-2xl md:text-4xl">$ 123.456</p>
              <p className="-mt-2 text-base md:text-xl md:mt-0">adicional</p>
            </div>
          </div>
          <div className="flex bg-neutral-800 w-full h-40 md:h-55 p-5 rounded-lg items-center">
            <img
              src="\notChatGPT Image Sep 21, 2025, 10_54_29 PM.png"
              className="h-32 md:h-45 aspect-square"
            ></img>
            <div className="flex flex-col ml-4 gap-3">
              <h1 className="text-lg md:text-xl">PRODUCTO</h1>
              <p className="text-2xl md:text-4xl">$ 123.456</p>
              <p className="-mt-2 text-base md:text-xl md:mt-0">adicional</p>
            </div>
          </div>
          <div className="flex bg-neutral-800 w-full h-40 md:h-55 p-5 rounded-lg items-center">
            <img
              src="\notChatGPT Image Sep 21, 2025, 10_54_29 PM.png"
              className="h-32 md:h-45 aspect-square"
            ></img>
            <div className="flex flex-col ml-4 gap-3">
              <h1 className="text-lg md:text-xl">PRODUCTO</h1>
              <p className="text-2xl md:text-4xl">$ 123.456</p>
              <p className="-mt-2 text-base md:text-xl md:mt-0">adicional</p>
            </div>
          </div>
          <div className="flex bg-neutral-800 w-full h-40 md:h-55 p-5 rounded-lg items-center">
            <img
              src="\notChatGPT Image Sep 21, 2025, 10_54_29 PM.png"
              className="h-32 md:h-45 aspect-square"
            ></img>
            <div className="flex flex-col ml-4 gap-3">
              <h1 className="text-lg md:text-xl">PRODUCTO</h1>
              <p className="text-2xl md:text-4xl">$ 123.456</p>
              <p className="-mt-2 text-base md:text-xl md:mt-0">adicional</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SearchResults;
