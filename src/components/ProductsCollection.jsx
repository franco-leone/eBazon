function ProductsCollection({ title = "---- select title ----" }) {
  return (
    <div className="flex p-4 gap-4">
      <div className="flex flex-col w-full lg:max-w-1/5 aspect-square bg-neutral-600 rounded-lg">
        <h1 className="p-2 text-lg">{title}</h1>
        <div className="grid grid-cols-2">
          <img
            className=""
            src="./public/notChatGPT Image Sep 21, 2025, 10_54_29 PM.png"
          ></img>
          <img
            className=""
            src="./public/notChatGPT Image Sep 21, 2025, 10_54_29 PM.png"
          ></img>
          <img
            className=""
            src="./public/notChatGPT Image Sep 21, 2025, 10_54_29 PM.png"
          ></img>
          <img
            className=""
            src="./public/notChatGPT Image Sep 21, 2025, 10_54_29 PM.png"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default ProductsCollection;
