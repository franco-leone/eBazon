import { Link } from "react-router-dom";

function SignInPage() {
  return (
    <>
      <div className="flex justify-center p-4 h-svh items-center">
        <div className="flex flex-col bg-neutral-700/20 shadow-lg rounded-lg p-4 w-full max-w-md lg:aspect-square justify-between">
          <div className="flex flex-col md:mt-8 h-full justify-evenly md:h-fit">
            <h1 className="flex text-3xl lg:text-4xl justify-center mt-4">
              Sign in
            </h1>
            <form className="flex flex-col gap-8 mt-8 md:mt-12">
              <div className="relative w-full">
                <input
                  type="email"
                  id="email"
                  placeholder="E-mail"
                  className="peer bg-neutral-700 p-2 rounded-lg outline-none text-white w-full placeholder-transparent focus:ring-2 focus:ring-neutral-500"
                />
                <label
                  htmlFor="email"
                  className="absolute left-2 text-neutral-400 text-base transition-all duration-200 
               peer-placeholder-shown:top-2 peer-placeholder-shown:text-base 
               peer-placeholder-shown:text-neutral-400 
               -top-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-neutral-300"
                >
                  E-mail
                </label>
              </div>
              <div className="relative w-full mt-2">
                <input
                  type="password"
                  id="password"
                  placeholder="E-mail"
                  className="peer bg-neutral-700 p-2 rounded-lg outline-none text-white w-full placeholder-transparent focus:ring-2 focus:ring-neutral-500"
                />
                <label
                  htmlFor="password"
                  className="absolute left-2 text-neutral-400 text-base transition-all duration-200 
               peer-placeholder-shown:top-2 peer-placeholder-shown:text-base 
               peer-placeholder-shown:text-neutral-400 
               -top-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-neutral-300"
                >
                  Contraseña
                </label>
              </div>
              <button className="mt-2 bg-blue-500 w-1/2 rounded-lg p-2 self-center cursor-pointer">
                CONFIRMAR
              </button>
            </form>
          </div>
          <Link className="text-sm relative self-center mb-2 text-neutral-300/85 cursor-pointer w-fit hover:text-white after:w-0 hover:after:w-1/1 after:absolute after:-bottom-[2px] after:left-0 after:bg-white after:h-[1px] hover:after:transition-[width] after:ease-in-out after:duration-300  after:content-[' ']">
            Olvidaste la contraseña?
          </Link>
        </div>
      </div>
    </>
  );
}

export default SignInPage;
