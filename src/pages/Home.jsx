import CarouselHome from "../components/CarouselHome.jsx";
import ProductsSlide from "../components/ProductsSlide.jsx";
import ProductsCollection from "../components/ProductsCollection.jsx";

function HomeContent() {
  return (
    <div className="mt-28">
      <CarouselHome />
      <div className="mt-8">
        <ProductsSlide title="Visitados recientemente" />
        <ProductsCollection title="Coleccion de verano" />
        <ProductsSlide title="Podrian interesarte" />
      </div>
    </div>
  );
}

export default HomeContent;
