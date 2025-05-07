import "./App.css";
import HeadphoneImg from "./assets/images/products/headphone.jpg";
import WatchImg from "./assets/images/products/watch.jpg";
import LaptopImg from "./assets/images/products/laptop.jpg";
import PhoneImg from "./assets/images/products/smartphone.jpg";
import MouseImg from "./assets/images/products/mouse.jpg";
import KeyboardImg from "./assets/images/products/keyboard.jpg";
import CustomSlider from "./components/CustomSlider";

const products = [
  {
    id: 1,
    image: PhoneImg,
    name: "Smartphone",
    description: "Experience high-quality sound without the wires",
    price: 500,
  },
  {
    id: 2,
    image: MouseImg,
    name: "Wireless Mouse",
    description: "Stay connected and keep track of your fitness goals",
    price: 80,
  },
  {
    id: 3,
    image: KeyboardImg,
    name: "Keyboard",
    description: "High-performance laptop designed for gaming and work",
    price: 120,
  },
  {
    id: 4,
    image: HeadphoneImg,
    name: "Headphones",
    description: "Experience high-quality sound without the wires",
    price: 50,
  },
  {
    id: 5,
    image: WatchImg,
    name: "Smartwatch",
    description: "Stay connected and keep track of your fitness goals",
    price: 100,
  },
  {
    id: 6,
    image: LaptopImg,
    name: "Gaming Laptop",
    description: "High-performance laptop designed for gaming and work",
    price: 1500,
  },
];

function App() {
  return (
    <div className="bg-gray-300 min-h-screen py-8 flex flex-col items-center px-cx">
      <h1 className="text-3xl uppercase text-center font-bold mb-8">
        PRODUCTS LIST
      </h1>
      <CustomSlider products={products} />
    </div>
  );
}

export default App;
