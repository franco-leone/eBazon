import { useState, useEffect } from "react";

{
  /* Diseños by Canva*/
}

const slides = [
  {
    id: 1,
    url: "./1.png",
  },
  {
    id: 2,
    url: "./2.png",
  },
  {
    id: 3,
    url: "./3.png",
  },
  {
    id: 4,
    url: "./4.png",
  },
  {
    id: 5,
    url: "./5.png",
  },
  {
    id: 6,
    url: "./6.png",
  },
];

function CarouselHome() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div>
      <div className="hidden relative w-full lg:flex lg:w-2/3 mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform ease-in-out duration-700"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide) => (
              <img
                key={slide.id}
                src={slide.url}
                alt="carousel slide"
                className="w-full flex-shrink-0 object-fill h-100"
              />
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="flex items-center absolute top-1/2 left-5 -translate-y-1/2 scale-200 text-white"
        >
          <span class="cursor-pointer material-symbols-rounded hover:text-neutral-400">
            keyboard_arrow_left
          </span>
        </button>
        <button
          onClick={nextSlide}
          className="flex items-center absolute top-1/2 right-5 -translate-y-1/2 scale-200 text-white"
        >
          <span class="cursor-pointer material-symbols-rounded hover:text-neutral-400">
            keyboard_arrow_right
          </span>
        </button>

        <div className="absolute bottom-0 right-1/2 translate-x-1/2 space-x-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 w-2 rounded-full transition-all ${
                current === idx ? "bg-neutral-800 w-4" : "bg-neutral-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarouselHome;
