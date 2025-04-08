import React from "react";

const TopBar = () => {
  return (
    <div className="bg-[#af8a39] text-white text-xs sm:text-lg tracking-wider  px-2 text-center fixed top-0 w-full z-50 whitespace-nowrap overflow-x-auto">
      <marquee behavior="scroll" direction="left">
        {" "}
        🚚 Free Shipping Nationwide! 
      </marquee>
    </div>
  );
};

export default TopBar;
