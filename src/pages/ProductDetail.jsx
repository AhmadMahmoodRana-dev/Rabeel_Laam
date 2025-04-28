import React, { useContext, useState } from "react";
import {
  FaMinus,
  FaPlus,
  FaHeart,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import image1 from "../assets/unstiched (1).png";
import image2 from "../assets/unstiched (2).png";
import image3 from "../assets/unstiched (3).png";
import image4 from "../assets/unstiched (4).png";
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";
import Footer from "../components/Footer/Footer";

const ProductDetail = () => {
  const [size, setSize] = useState("39/6");
  const [type, setType] = useState("Leather");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [currentImage, setCurrentImage] = useState(image1);
  const ProductImage = [image1, image2, image3, image4];
  const { setOpenCart, openCart } = useContext(Context);

  const sizes = ["39/6", "40/7", "41/8", "42/9", "43/10", "44/11", "45/12"];
  const types = ["Unstitched", "Stitched"];

  const shareProduct = (platform) => {
    const url = window.location.href;
    const text = `Check out this product: Peshawari Chappal - ZKP 10158!`; // You can customize this

    let shareUrl = "";
    if (platform === "facebook") {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    } else if (platform === "twitter") {
      shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    } else if (platform === "whatsapp") {
      shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
    } else if (platform === "telegram") {
      shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    }

    window.open(shareUrl, "_blank");
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-6">
          <div className="aspect-square overflow-hidden rounded-3xl shadow-xl border">
            <img
              src={currentImage}
              alt="Peshawari Chappal"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex gap-3 pb-4 overflow-x-auto">
            {ProductImage.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(img)}
                className="shrink-0 focus:outline-none"
              >
                <img
                  src={img}
                  alt={`Thumb ${index}`}
                  className={`w-20 h-20 object-cover rounded-xl border-2 ${
                    currentImage === img
                      ? "border-gray-800 ring-2 ring-black"
                      : ""
                  } hover:border-gray-800 transition-colors`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              Peshawari Chappal - ZKP 10158
            </h1>
            <p className="text-lg text-gray-500 mb-3">SKU: ZKP10158-39</p>
            <p className="text-3xl font-bold text-gray-900 mb-6">Rs.11,900.00</p>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Product Description</h3>
            <p className="text-gray-600">
              Experience unmatched craftsmanship with our traditional Peshawari Chappal.
              Made with premium leather, providing comfort and durability perfect for any occasion.
            </p>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Select Size: <span className="text-gray-500 ml-2">{size}</span>
            </h3>
            <div className="grid grid-cols-4 gap-3">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`p-3 text-center rounded-xl border-2 font-medium transition-all ${
                    size === s
                      ? "border-[#dd211f] bg-[#dd211f] text-white"
                      : "border-gray-200 hover:border-gray-400 bg-white text-gray-800"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Types */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Select Type: <span className="text-gray-500 ml-2">{type}</span>
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  className={`p-3 text-center rounded-xl border-2 font-medium transition-all ${
                    type === t
                      ? "border-[#075686] bg-[#075686] text-white"
                      : "border-gray-200 hover:border-gray-400 bg-white text-gray-800"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-6">
            <span className="text-lg font-semibold text-gray-800">Quantity:</span>
            <div className="flex items-center gap-4 bg-gray-100 px-4 py-2 rounded-full">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="rounded-full h-8 w-8 hover:bg-gray-200"
              >
                <FaMinus className="h-4 w-4" />
              </button>
              <span className="text-xl font-medium w-8 text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="rounded-full h-8 w-8 hover:bg-gray-200"
              >
                <FaPlus className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => setOpenCart(!openCart)} className="flex-1 md:h-14 py-3 text-lg rounded-xl text-white bg-gray-900 hover:bg-gray-800">
              Add to Cart
            </button>
            <Link to={'/checkout'} className="flex-1 text-center md:h-14 py-3 text-lg rounded-xl text-white bg-[#075686] hover:bg-[#4c6f83]">
              Buy it Now
            </Link>
          </div>

          {/* Wishlist */}
          <button
            className="text-gray-600 hover:text-red-500 gap-2 flex"
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            <FaHeart
              className={`h-5 w-5 ${
                isWishlisted ? "fill-red-500 stroke-red-500" : ""
              }`}
            />
            {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
          </button>

          {/* Share Section */}
          <div className="pt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Share This Product</h3>
            <div className="flex gap-4">
              <button onClick={() => shareProduct("facebook")} className="bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700">
                <FaFacebookF />
              </button>
              <button onClick={() => shareProduct("twitter")} className="bg-sky-400 p-3 rounded-full text-white hover:bg-sky-500">
                <FaTwitter />
              </button>
              <button onClick={() => shareProduct("whatsapp")} className="bg-green-500 p-3 rounded-full text-white hover:bg-green-600">
                <FaWhatsapp />
              </button>
              <button onClick={() => shareProduct("telegram")} className="bg-blue-400 p-3 rounded-full text-white hover:bg-blue-500">
                <FaTelegramPlane />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetail;
