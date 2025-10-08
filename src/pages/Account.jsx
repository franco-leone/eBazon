import { Link } from "react-router-dom";

function AccountPage() {
  return (
    <div className="flex relative min-h-svh pt-32">
      <div className="hidden  w-1/3 h-full lg:flex"></div>
      <div className="flex flex-col w-full h-full items-center">
        <div className="flex flex-col mt-5 w-full items-center">
          <img
            src="./no-user-pic.jpg"
            className="flex mt-5 w-26 h-26 rounded-full"
          ></img>
          <h1 className="text-2xl mt-5">Hola, USER!</h1>
        </div>
        <input
          className="flex w-5/7 lg:w-2/5 mt-7.5 outline-none bg-neutral-700 p-3 rounded-lg"
          placeholder="Search for keywords..."
        ></input>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-5 w-full min-h-full mt-8 p-3">
          <Link
            to="/"
            className="flex cursor-pointer  hover:bg-neutral-700/30 rounded-lg active:bg-neutral-700/30 relative p-4 justify-between w-full md:after:w-0 after:w-9/10 after:h-px after:bg-neutral-500/70 after:absolute after:-translate-x-1/2 after:left-1/2 after:bottom-0 after:content-['']"
          >
            <div className="flex self-center">
              <div>
                <h1 className="text-xl">Informacion de tu cuenta</h1>
                <p className="text-sm mt-2 text-neutral-400">
                  Direccion, historial de compras y mas
                </p>
              </div>
            </div>
            <span class="cursor-pointer material-symbols-rounded self-center hover:text-neutral-400">
              keyboard_arrow_right
            </span>
          </Link>
          <Link
            to="/"
            className="flex cursor-pointer  hover:bg-neutral-700/30 rounded-lg active:bg-neutral-700/30 relative p-4 justify-between w-full md:after:w-0 after:w-9/10 after:h-px after:bg-neutral-500/70 after:absolute after:-translate-x-1/2 after:left-1/2 after:bottom-0 after:content-['']"
          >
            <div className="self-center">
              <h1 className="text-xl">Seguridad</h1>
              <p className="text-sm mt-2 text-neutral-400">
                Opciones de seguridad
              </p>
            </div>
            <span class="cursor-pointer material-symbols-rounded self-center hover:text-neutral-400">
              keyboard_arrow_right
            </span>
          </Link>
          <Link
            to="/"
            className="flex cursor-pointer  hover:bg-neutral-700/30 rounded-lg active:bg-neutral-700/30 relative p-4 justify-between w-full md:after:w-0 after:w-9/10 after:h-px after:bg-neutral-500/70 after:absolute after:-translate-x-1/2 after:left-1/2 after:bottom-0 after:content-['']"
          >
            <div className="self-center">
              <h1 className="text-xl">Metodos de pago</h1>
              <p className="text-sm mt-2 text-neutral-400">
                Metodos de pago guardados en tu cuenta
              </p>
            </div>
            <span class="cursor-pointer material-symbols-rounded self-center hover:text-neutral-400">
              keyboard_arrow_right
            </span>
          </Link>
          <Link
            to="/"
            className="flex cursor-pointer  hover:bg-neutral-700/30 rounded-lg active:bg-neutral-700/30 relative p-4 justify-between w-full md:after:w-0 after:w-9/10 after:h-px after:bg-neutral-500/70 after:absolute after:-translate-x-1/2 after:left-1/2 after:bottom-0 after:content-['']"
          >
            <div className="self-center">
              <h1 className="text-xl">Pedidos</h1>
              <p className="text-sm mt-2 text-neutral-400">
                Seguir, cancelar, descargar tu factura y mas
              </p>
            </div>
            <span class="cursor-pointer material-symbols-rounded self-center hover:text-neutral-400">
              keyboard_arrow_right
            </span>
          </Link>
          <Link
            to="/"
            className="flex cursor-pointer  hover:bg-neutral-700/30 rounded-lg active:bg-neutral-700/30 relative p-4 justify-between w-full "
          >
            <div className="self-center">
              <h1 className="text-xl">Privacidad</h1>
              <p className="text-sm mt-2 text-neutral-400">
                Preferencias y control sobre el uso de tus datos
              </p>
            </div>
            <span class="cursor-pointer material-symbols-rounded self-center hover:text-neutral-400">
              keyboard_arrow_right
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
