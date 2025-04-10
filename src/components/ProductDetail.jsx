import {useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import image1 from "../assets/unstiched (1).png";
import image2 from "../assets/unstiched (2).png";
import image3 from "../assets/unstiched (3).png";
import image4 from "../assets/unstiched (4).png";


const product = {
  name: 'Opal - Fresh Birds',
  id: 'FTW7647',
  price: 4849,
  oldPrice: 8082,
  discount: 40,
  sizes: [
    '1-2Y', '2-3Y', '3-4Y', '5-6Y',
    '6-7Y', '7-8Y', '8-9Y', '9-10Y',
    '11-12Y', '14-15Y',
  ],
  images: [
   image1,
   image2,
   image3,
   image4,
  ],
};

const ProductDetail = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  return (
    <Dialog open={open} onClose={handleClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-transparent transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex justify-center min-h-full mt-20 items-center ml-64">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white  text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-[90%] data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <div className="w-full mb-4">
                  <img
                    src={selectedImage}
                    alt="Main Preview"
                    className="rounded-xl w-full h-[400px] object-cover "
                  />
                </div>

                {/* Thumbnails */}
                <div className="flex overflow-x-auto gap-3">
                  {product.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Thumbnail ${index}`}
                      onClick={() => setSelectedImage(img)}
                      className={`w-20 h-24 object-cover cursor-pointer rounded-lg border ${
                        selectedImage === img
                          ? "border-black"
                          : "border-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Right: Product Details */}
              <div className="space-y-5">
                <div>
                  <h1 className="text-2xl font-bold">{product.name}</h1>
                  <p className="text-sm text-gray-500">ID: {product.id}</p>
                </div>

                <div>
                  <p className="text-xl font-semibold text-red-500">
                    PKR {product.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500 line-through">
                    PKR {product.oldPrice.toLocaleString()}
                  </p>
                  <p className="text-sm font-bold text-green-600">
                    {product.discount}% OFF
                  </p>
                </div>

                <div>
                  <p className="font-medium mb-1">
                    Kids Size{" "}
                    <span className="text-blue-500 text-sm ml-2 cursor-pointer">
                      Size Guide
                    </span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded-lg border ${
                          selectedSize === size
                            ? "bg-black text-white"
                            : "bg-white text-black hover:bg-gray-100"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center gap-3">
                  <p className="font-medium">Quantity:</p>
                  <div className="flex items-center border rounded-lg overflow-hidden">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1 text-lg hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-4">{quantity}</span>
                    <button
                      onClick={() => setQuantity(Math.min(5, quantity + 1))}
                      className="px-3 py-1 text-lg hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-sm text-gray-500">
                    Maximum 5 pieces per order
                  </span>
                </div>

                {/* Rewards & Shipping */}
                <div className="text-sm space-y-2">
                  <div className="border p-3 rounded-md flex items-center justify-between">
                    <p>
                      Sign in and get up to{" "}
                      <span className="font-bold">102 points</span> in rewards
                      on this purchase
                    </p>
                  </div>
                  <div className="border p-3 rounded-md">
                    <p className="font-semibold">Express Shipping</p>
                    <p className="text-gray-600">
                      Estimated Shipping Date:{" "}
                      <span className="font-medium">Apr 11, 2025</span>
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-black text-white w-full py-3 rounded-lg hover:bg-gray-800 transition">
                    Add to Bag
                  </button>
                  <button className="border w-full py-3 rounded-lg hover:bg-gray-100">
                    ♡ Wishlist
                  </button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default ProductDetail;
