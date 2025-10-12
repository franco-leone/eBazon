import { Link } from "react-router-dom";

function ProductsSlide({ title = "---- select title ----" }) {
  return (
    <div className="p-5">
      <h1 className="text-2xl md:text-4xl mb-8">{title}</h1>
      <div className="grid grid-flow-col auto-cols-[calc(50%-0.5rem)] md:auto-cols-[calc(33%-0.5rem)] lg:auto-cols-[18rem] gap-4 overflow-x-auto rounded-lg">
        <Link
          to="/product"
          className="flex flex-col justify-between mb-4 bg-neutral-700 h-70 md:h-100 rounded-lg p-4"
        >
          <img
            className="flex w-full justify-self-center"
            src="./public/notChatGPT Image Sep 21, 2025, 10_54_29 PM.png"
          ></img>
          <div>
            <h1 className="text-sm md:text-base md:mb-4">PRODUCTO</h1>
            <p className="text-2xl md:text-3xl">$123.456</p>
          </div>
        </Link>
        <div className="flex flex-col justify-between mb-4 bg-neutral-700 h-70 md:h-100 rounded-lg p-4">
          <img
            className="flex w-full justify-self-center"
            src="./public/notChatGPT Image Sep 21, 2025, 10_54_29 PM.png"
          ></img>
          <div>
            <h1 className="text-sm md:text-base md:mb-4">PRODUCTO</h1>
            <p className="text-2xl md:text-3xl">$123.456</p>
          </div>
        </div>
        <div className="flex flex-col justify-between mb-4 bg-neutral-700 h-70 md:h-100 rounded-lg p-4">
          <img
            className="flex w-full justify-self-center"
            src="./public/notChatGPT Image Sep 21, 2025, 10_54_29 PM.png"
          ></img>
          <div>
            <h1 className="text-sm md:text-base md:mb-4">PRODUCTO</h1>
            <p className="text-2xl md:text-3xl">$123.456</p>
          </div>
        </div>
        <div className="flex flex-col justify-between mb-4 bg-neutral-700 h-70 md:h-100 rounded-lg p-4">
          <img
            className="flex w-full justify-self-center"
            src="./public/notChatGPT Image Sep 21, 2025, 10_54_29 PM.png"
          ></img>
          <div>
            <h1 className="text-sm md:text-base md:mb-4">PRODUCTO</h1>
            <p className="text-2xl md:text-3xl">$123.456</p>
          </div>
        </div>
        <div className="flex flex-col justify-between mb-4 bg-neutral-700 h-70 md:h-100 rounded-lg p-4">
          <img
            className="flex w-full justify-self-center"
            src="./public/notChatGPT Image Sep 21, 2025, 10_54_29 PM.png"
          ></img>
          <div>
            <h1 className="text-sm md:text-base md:mb-4">PRODUCTO</h1>
            <p className="text-2xl md:text-3xl">$123.456</p>
          </div>
        </div>
        <div className="flex flex-col justify-between mb-4 bg-neutral-700 h-70 md:h-100 rounded-lg p-4">
          <img
            className="flex w-full justify-self-center"
            src="./public/notChatGPT Image Sep 21, 2025, 10_54_29 PM.png"
          ></img>
          <div>
            <h1 className="text-sm md:text-base md:mb-4">PRODUCTO</h1>
            <p className="text-2xl md:text-3xl">$123.456</p>
          </div>
        </div>
        <div className="flex flex-col justify-between mb-4 bg-neutral-700 h-70 md:h-100 rounded-lg p-4">
          <img
            className="flex w-full justify-self-center"
            src="./public/notChatGPT Image Sep 21, 2025, 10_54_29 PM.png"
          ></img>
          <div>
            <h1 className="text-sm md:text-base md:mb-4">PRODUCTO</h1>
            <p className="text-2xl md:text-3xl">$123.456</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsSlide;
