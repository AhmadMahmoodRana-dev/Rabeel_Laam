import React from "react";
import HomePageMainCarousel from "../components/Home/HomePageMainCarousel";
import HomePageGridStructure from "../components/Home/HomePageGridStructure";
import HomePageCategorySlider from "../components/Home/HomePageCategorySlider";
import BrandCardGrid from "../components/Home/BrandCardGrid";

const Home = () => {
  return (
    <div className="w-full h-screen xl:px-16 lg:px-12 md:px-10 sm:px-8 px-4 ">
      <HomePageMainCarousel />
      <HomePageCategorySlider/>
      <HomePageCategorySlider/>
      <HomePageGridStructure heading={"Shop Luxury Picks"} />
      <HomePageGridStructure heading={"Buy Festive Glam"} />
      <HomePageGridStructure heading={"Shop Daily Pret"} />
      <BrandCardGrid />
    </div>
  );
};

export default Home;
