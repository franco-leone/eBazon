import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="flex pl-4 pr-4 justify-between items-center w-full h-18 bg-neutral-700">
        <Link to="/" className="flex items-center">
          <img
            className="w-16"
            src="./public/notChatGPT Image Sep 21, 2025, 10_54_29 PM.png"
          ></img>
          <h1 className="text-2xl">eBazon</h1>
        </Link>
        <div className="hidden md:flex">
          <input
            className="flex focus:bg-neutral-900/40 text-white pl-2.5 h-10 md:w-100 lg:w-140 bg-neutral-800/60 rounded-l-lg outline-0 hover:bg-neutral-600"
            placeholder="Search on eBazon..."
          ></input>
          <button className="hover:bg-neutral-600 cursor-pointer flex items-center justify-center bg-neutral-800 md:h-10 md:w-10 rounded-r-lg">
            <span className="material-symbols-rounded">search</span>
          </button>
        </div>
        <div>
          <div className="md:flex gap-5">
            <Link to="/cart" className="hidden md:flex">
              <span className="cursor-pointer material-symbols-rounded hover:text-neutral-400">
                shopping_cart
              </span>
            </Link>
            <Link to="/account" className="hidden md:flex">
              <span className="cursor-pointer material-symbols-rounded hover:text-neutral-400">
                account_circle
              </span>
            </Link>
            <Menu as="div" className="relative inline-block h-full w-full">
              <MenuButton className="flex cursor-pointer h-full w-full items-center justify-center">
                <span className="cursor-pointer material-symbols-rounded hover:text-neutral-400">
                  menu
                </span>
              </MenuButton>
              <MenuItems
                transition
                className="absolute right-0 mt-2 w-56 rounded-lg bg-neutral-900 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-white data-focus:bg-white/5 data-focus:text-gray-300 data-focus:outline-hidden"
                    >
                      CATEGORIA
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-white data-focus:bg-white/5 data-focus:text-gray-300 data-focus:outline-hidden"
                    >
                      CATEGORIA
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-white data-focus:bg-white/5 data-focus:text-gray-300 data-focus:outline-hidden"
                    >
                      CATEGORIA
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-1 grid-cols-3 md:grid-cols-5 lg:grid-cols-7 place-items-center w-full h-10 bg-neutral-700/80">
        <Menu as="div" className="relative inline-block h-full w-full">
          <MenuButton className="flex gap-3 cursor-pointer pr-6 pl-6 h-full w-full items-center justify-center hover:bg-neutral-800 focus:outline-none">
            <p>Categorias</p>
            <span className="material-symbols-rounded">
              keyboard_arrow_down
            </span>
          </MenuButton>
          <MenuItems
            transition
            className="absolute mt-2 w-56 rounded-lg bg-neutral-900 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
          >
            <div className="py-1">
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-white data-focus:bg-white/5 data-focus:text-gray-300 data-focus:outline-hidden"
                >
                  CATEGORIA
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-white data-focus:bg-white/5 data-focus:text-gray-300 data-focus:outline-hidden"
                >
                  CATEGORIA
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-white data-focus:bg-white/5 data-focus:text-gray-300 data-focus:outline-hidden"
                >
                  CATEGORIA
                </a>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
        <Link
          to="/"
          className="flex cursor-pointer pr-6 pl-6 h-full w-full items-center justify-center hover:bg-neutral-800/50"
        >
          Ofertas
        </Link>
        <Link
          to="/"
          className="flex cursor-pointer pr-6 pl-6 h-full w-full items-center justify-center hover:bg-neutral-800/50"
        >
          Tecnologia
        </Link>
        <Link
          to="/"
          className="hidden cursor-pointer pr-6 pl-6 h-full w-full hover:bg-neutral-800/50 md:flex md:items-center md:justify-center"
        >
          Cuidado
        </Link>
        <Link
          to="/"
          className="hidden cursor-pointer pr-6 pl-6 h-full w-full hover:bg-neutral-800/50 md:flex md:items-center md:justify-center"
        >
          Moda
        </Link>
        <Link
          to="/"
          className="hidden cursor-pointer pr-6 pl-6 h-full w-full hover:bg-neutral-800/50 lg:flex md:items-center md:justify-center"
        >
          Regalos
        </Link>
        <Link
          to="/"
          className="hidden cursor-pointer pr-6 pl-6 h-full w-full hover:bg-neutral-800/50 lg:flex md:items-center md:justify-center"
        >
          Libros
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
