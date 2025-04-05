import React from "react";
const SliderCard = ({ name,image }) => {
  return (
    <div className="w-[180px]">
      <img src={image} alt="" className="w-full h-full" />
      <h2 className="text-center text-md text-gray-700 font-semibold italic">
        {name}{" "}
      </h2>
    </div>
  );
};

export default SliderCard;
