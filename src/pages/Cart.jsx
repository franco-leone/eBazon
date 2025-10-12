import ProductsSlide from "../components/ProductsSlide";

function CartPage() {
  return (
    <div className="justify-self-center mt-28 md:p-4 pt-0 w-full md:w-6/8">
      <h1 className="text-3xl p-4">Carrito</h1>
      <div className="grid relative grid-cols-1 xl:grid-cols-10 md:gap-4 w-full">
        <div className="flex flex-col gap-4 col-span-7">
          <div className="flex bg-neutral-700 h-40 lg:h-50 w-full p-4 md:rounded-lg content-center">
            <img
              className="h-full mr-4"
              src="./public/notChatGPT Image Sep 21, 2025, 10_54_29 PM.png"
            ></img>
            <div className="flex flex-col w-full justify-between md:flex-row h-full truncate">
              <div className="lg:flex lg:flex-col justify-between">
                <div>
                  <h1 className="text-xl md:text-2xl">
                    PRODUCTO PRODUCTO PRODUCTO
                  </h1>
                  <p className="hidden mt-4 md:flex text-neutral-400 text-sm">
                    MAS INFORMACION MAS INFORMACION
                  </p>
                </div>
                <button className="text-sm mt-4 text-red-400 cursor-pointer w-fit">
                  Eliminar
                </button>
              </div>
              <div className="flex h-full md:mt-0 justify-between">
                <div className="flex h-full items-center mr-8">
                  <button className="flex w-7 h-7 justify-center bg-neutral-600 items-center rounded-l-lg">
                    <span className="material-symbols-rounded">add</span>
                  </button>
                  <span className="flex w-10 h-7 bg-neutral-500 justify-center items-center">
                    99
                  </span>
                  <button className="flex w-7 h-7 justify-center bg-neutral-600 items-center rounded-r-lg">
                    <span className="material-symbols-rounded">remove</span>
                  </button>
                </div>
                <p className="flex self-center text-xl">$123.456</p>
              </div>
            </div>
          </div>
          <div className="flex bg-neutral-700 h-40 md:h-50 w-full p-4 md:rounded-lg content-center">
            <img
              className="h-full mr-4"
              src="./public/notChatGPT Image Sep 21, 2025, 10_54_29 PM.png"
            ></img>
            <div className="flex flex-col w-full justify-between md:flex-row h-full truncate">
              <div className="md:flex md:flex-col justify-between">
                <div>
                  <h1 className="text-xl md:text-2xl">
                    PRODUCTO PRODUCTO PRODUCTO
                  </h1>
                  <p className="hidden mt-4 md:flex text-neutral-400 text-sm">
                    MAS INFORMACION MAS INFORMACION
                  </p>
                </div>
                <button className="text-sm mt-4 text-red-400 cursor-pointer w-fit">
                  Eliminar
                </button>
              </div>
              <div className="flex h-full md:mt-0 justify-between">
                <div className="flex h-full items-center mr-8">
                  <button className="flex w-7 h-7 justify-center bg-neutral-600 items-center rounded-l-lg">
                    <span className="material-symbols-rounded">add</span>
                  </button>
                  <span className="flex w-10 h-7 bg-neutral-500 justify-center items-center">
                    99
                  </span>
                  <button className="flex w-7 h-7 justify-center bg-neutral-600 items-center rounded-r-lg">
                    <span className="material-symbols-rounded">remove</span>
                  </button>
                </div>
                <p className="flex self-center text-xl">$123.456</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between sticky top-4 bg-neutral-700 col-span-3 mt-4 p-4 h-fit md:h-70 md:rounded-lg sm:mt-0">
          <div className="flex flex-col gap-1">
            <div className="flex justify-between">
              <p>Producto</p>
              <span>$123.456</span>
            </div>
            <div className="flex justify-between">
              <p>Envio</p>
              <span>$123.456</span>
            </div>
            <div className="flex justify-between">
              <p>Impuestos</p>
              <span>$123.456</span>
            </div>
            <p>Cupon</p>
          </div>
          <div className="flex flex-col">
            <div className="flex mt-6 mb-4 justify-between font-bold text-xl md:text-2xl">
              <p>Total</p>
              <span>$370.000</span>
            </div>
            <button className="bg-blue-500 self-center justify-self-center p-3 rounded-lg shadow-lg hover:shadow-xs cursor-pointer">
              Confirmar compra
            </button>
          </div>
        </div>
      </div>
      <div>
        <ProductsSlide title="Pueden interesarte" />
      </div>
    </div>
  );
}

export default CartPage;
