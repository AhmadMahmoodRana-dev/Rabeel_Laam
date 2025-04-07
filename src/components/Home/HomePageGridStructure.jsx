import React from "react";
import image1 from "../../assets/unstiched (1).png";
import image2 from "../../assets/unstiched (2).png";
import image3 from "../../assets/unstiched (3).png";
import image4 from "../../assets/unstiched (4).png";
import image5 from "../../assets/unstiched (5).png";
import image6 from "../../assets/unstiched (6).png";
import image7 from "../../assets/unstiched (7).png";
import image8 from "../../assets/unstiched (8).png";
const luxuryPicks = [
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

const HomePageGridStructure = ({heading}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold mb-6">{heading}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-6">
        {luxuryPicks.map((item, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.brand}
                className="h-80 w-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-red-100 text-red-600 px-3 py-1 rounded-md text-sm font-semibold">
                {item.discount}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium">{item.brand}</h3>
              <p className="text-sm text-gray-600">{item.items}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageGridStructure;