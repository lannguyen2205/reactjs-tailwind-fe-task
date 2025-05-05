import "./App.css";
import ProductCard from "./components/ProductCard";
import HeadphoneImg from "./assets/images/products/headphone.jpg";
import WatchImg from "./assets/images/products/watch.jpg";
import LaptopImg from "./assets/images/products/laptop.jpg";
import { ReactComponent as ArrowIcon } from "./assets/icon/arrow.svg";
import { useState } from "react";

//Mock data
const products = [
  {
    id: 1,
    image: HeadphoneImg,
    name: "Headphones",
    description: "Experience high-quality sound without the wires",
    price: 50,
  },
  {
    id: 2,
    image: WatchImg,
    name: "Smartwatch",
    description: "Stay connected and keep track of your fitness goals",
    price: 100,
  },
  {
    id: 3,
    image: LaptopImg,
    name: "Gaming Laptop",
    description: "High-performance laptop designed for gaming and work",
    price: 1500,
  },
  {
    id: 4,
    image: HeadphoneImg,
    name: "Headphones 2",
    description: "Experience high-quality sound without the wires",
    price: 80,
  },
  {
    id: 5,
    image: WatchImg,
    name: "Smartwatch 2",
    description: "Stay connected and keep track of your fitness goals",
    price: 120,
  },
  {
    id: 6,
    image: LaptopImg,
    name: "Gaming Laptop 2",
    description: "High-performance laptop designed for gaming and work",
    price: 1300,
  },
];

function App() {
  const visibleCount = 3;
  const [currentIndex, setCurrentIndex] = useState(0); // useState to manage the current index of the slider

  // function to handle the previous button click
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  // function to handle the next button click
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  // duplicate products array to make the slider infinite
  const extendedProducts = [...products, ...products];

  return (
    <div className="bg-gray-300 min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-3xl uppercase text-center font-bold mb-8">
        PRODUCTS LIST
      </h1>

      <div className="relative w-full max-w-[1260px]">
        {/* Prev Button */}
        <div
          onClick={handlePrev}
          className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center bg-slate-200 w-10 h-10 shadow-md  hover:bg-gray-300 rounded-md cursor-pointer"
        >
          <ArrowIcon className="rotate-90" />
        </div>

        {/* Slider*/}
        <div className="w-full overflow-hidden py-2">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${(extendedProducts.length * 100) / visibleCount}%`, // set the width of the slider to be the total width of all products
              transform: `translateX(-${
                (currentIndex * 100) / extendedProducts.length
              }%)`, // set the transform to move the slider based on the current index
            }}
          >
            {extendedProducts.map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="w-[420px] flex flex-col items-center flex-shrink-0 px-3"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <div
          onClick={handleNext}
          className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center bg-slate-200 w-10 h-10 shadow-md  hover:bg-gray-300 rounded-md cursor-pointer"
        >
          <ArrowIcon className="-rotate-90 [&>svg]:w-20" />
        </div>
      </div>
    </div>
  );
}

export default App;
