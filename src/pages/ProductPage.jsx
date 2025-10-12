import ProductsSlide from "../components/ProductsSlide.jsx";

function ProductPage({
  title = "PRODUCTO PRODUCTO PRODUCTO",
  price = "123.456",
}) {
  return (
    <div className="flex flex-col w-full mt-28 content-center">
      <div className="flex flex-col lg:flex-row p-4 gap-4 md:w-3/5 self-center mt-4 bg-neutral-700/30 lg:rounded-lg">
        <img
          className="lg:w-1/3 md:max-w-1/2"
          src="./public/notChatGPT Image Sep 21, 2025, 10_54_29 PM.png"
        ></img>
        <div>
          <h1 className="text-xl md:text-3xl">{title}</h1>
          <h2 className="text-4xl">${price}</h2>
          <div className="flex flex-col gap-2">
            <p>ENVIO</p>
            <p>IMPUESTOS</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div>STOCK</div>
          <button className="bg-blue-500 p-2 rounded-lg">Comprar</button>
          <button className="bg-sky-800 p-2 rounded-lg">
            Agregar al carrito
          </button>
          <div>
            <div className="flex flex-col gap-2 text-neutral-400">
              <div className="flex gap-2 items-center">
                <span className="material-symbols-rounded">
                  keyboard_return
                </span>
                <p className="text-sm">
                  <span>Devolucion gratuita.</span> Tenes 30 dias desde que lo
                  recibis.
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <span className="material-symbols-rounded">verified_user</span>
                <p className="text-sm">
                  <span>Compra protegida.</span> Recibi el producto que
                  esperabas o te devolvemos tu dinero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductsSlide title="Productos relacionados" />
    </div>
  );
}

export default ProductPage;
