import React, { useState } from "react";
import HomePageMainCarousel from "../components/Home/HomePageMainCarousel";
import HomePageGridStructure from "../components/Home/HomePageGridStructure";
import HomePageCategorySlider from "../components/Home/HomePageCategorySlider";
import BrandCardGrid from "../components/Home/BrandCardGrid";
import LargeCardSlider from "../components/Home/LargeCardSlider";
import image1 from "../assets/unstiched (1).png";
import image2 from "../assets/unstiched (2).png";
import image3 from "../assets/unstiched (3).png";
import image4 from "../assets/unstiched (4).png";
import image5 from "../assets/unstiched (5).png";
import image6 from "../assets/unstiched (6).png";
import image7 from "../assets/unstiched (7).png";
import image8 from "../assets/unstiched (8).png";
import TrendingProducts from "../components/Home/TrendingProducts";
import Footer from "../components/Footer/Footer";
import ProductDetail from "../components/ProductDetail";
const Home = () => {
  const [selectedSize, setSelectedSize] = useState("40/7");
  const [quantity, setQuantity] = useState(1);

  const sizes = [
    { label: "39/6", disabled: true },
    { label: "40/7" },
    { label: "41/8" },
    { label: "42/9" },
    { label: "43/10" },
    { label: "44/11" },
    { label: "45/12" },
  ];
  const products = [
    {
      brand: "Agha Jaan",
      items: "134 items",
      discount: "Upto 80% off",
      image: image1,
    },
    {
      brand: "Haseens Official",
      items: "244 items",
      discount: "Upto 80% off",
      image: image2,
    },
    {
      brand: "Diara Couture",
      items: "66 items",
      discount: "Upto 20% off",
      image: image3,
    },
    {
      brand: "Four Season Boutique",
      items: "230 items",
      discount: "Upto 75% off",
      image: image4,
    },
    {
      brand: "Four Season Boutique",
      items: "230 items",
      discount: "Upto 75% off",
      image: image5,
    },
    {
      brand: "Four Season Boutique",
      items: "230 items",
      discount: "Upto 75% off",
      image: image6,
    },
    {
      brand: "Four Season Boutique",
      items: "230 items",
      discount: "Upto 75% off",
      image: image7,
    },
    {
      brand: "Four Season Boutique",
      items: "230 items",
      discount: "Upto 75% off",
      image: image8,
    },
  ];

  return (
    <div>

    <div className="w-full min-h-screen xl:px-16 lg:px-12 md:px-10 sm:px-8 px-4 ">
      <HomePageMainCarousel />
      <HomePageCategorySlider />
      <HomePageCategorySlider />
      <HomePageGridStructure heading={"Shop Luxury Picks"} />
      <HomePageGridStructure heading={"Buy Festive Glam"} />
      <HomePageGridStructure heading={"Shop Daily Pret"} />
      <BrandCardGrid />
      <LargeCardSlider heading={"Buy Menswear"} products={products} />
      <LargeCardSlider heading={"Shop Kidswear"} products={products} />
      <HomePageCategorySlider />
      <LargeCardSlider heading={"Shop Accessories"} products={products} />
      <HomePageGridStructure heading={"SUMMER LAWN '25"} />
      <TrendingProducts />
      {/* <OneTimeShowModel /> */}
      <ProductDetail/>
      
      <div className="flex flex-col md:flex-row p-4 md:p-12 gap-8">
      {/* Left Images */}
      <div className="flex flex-col gap-4">
        <img
          src="/shoe-main.jpg"
          alt="Main Shoe"
          className="w-96 h-auto object-cover"
        />
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((_, i) => (
            <img
              key={i}
              src={`/shoe-thumb-${i + 1}.jpg`}
              alt={`Thumb ${i + 1}`}
              className="w-20 h-20 object-cover border rounded"
            />
          ))}
        </div>
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <h1 className="text-2xl font-semibold mb-2">Monks Shoes-ZK 10146BRS</h1>
        <p className="text-sm text-gray-500 mb-4">SKU: ZK10146BRS-40</p>

        <div className="text-xl font-bold text-black mb-1">Rs.8,900.00</div>
        <div className="text-sm line-through text-gray-400">Rs.14,900.00</div>
        <div className="text-green-600 text-sm mb-3">Save Rs.6,000.00 (40% off)</div>

        <div className="bg-black text-white px-2 py-1 inline-block mb-4 font-medium">
          Hurry, Only 1 left!
        </div>

        <div className="mb-4">
          <div className="font-medium mb-1">SIZE: {selectedSize}</div>
          <div className="flex gap-2 flex-wrap">
            {sizes.map(({ label, disabled }) => (
              <button
                key={label}
                onClick={() => !disabled && setSelectedSize(label)}
                className={`px-4 py-1 border rounded ${
                  disabled
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : label === selectedSize
                    ? "border-yellow-600 text-yellow-600"
                    : "hover:border-black"
                }`}
                disabled={disabled}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4 flex items-center gap-2">
          <span className="font-medium">Quantity:</span>
          <button
            className="px-3 py-1 border rounded"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            className="px-3 py-1 border rounded"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <button className="bg-black text-white px-6 py-2 rounded">ADD TO CART</button>
          <button className="bg-yellow-600 text-white px-6 py-2 rounded">BUY IT NOW</button>
        </div>

        <button className="text-sm text-gray-700 underline mb-2">Add to Wishlist</button>

        <div className="flex gap-6 text-center text-sm mt-6">
          <div>
            <div className="text-xl">🔒</div>
            Secure
          </div>
          <div>
            <div className="text-xl">📦</div>
            Free Shipping
          </div>
          <div>
            <div className="text-xl">↩️</div>
            15 Days Refund
          </div>
        </div>
      </div>
    </div>
    </div>

      <Footer/>
    </div>
  );
};

export default Home;
