import Slider from "../components/Carousel/Slider";
import sliderImage from "../assets/sliderImage";
import categoryData from "../assets/categoryData";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import SpinnerLoader from "../components/SpinnerLoader/SpinnerLoader";
import { use, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import PromotionalBanner from "../components/PromotionalBanner/PromotionalBanner";
import SpecialOffer from "../components/SpecialOffer/SpecialOffer";

export default function Home() {
  const { data, isLoading, error, reFetch } = useFetch(
    `http://localhost:3000/api/categories`
  );

  return (
    <div>
      <div
        className="carousel-home-page"
        style={{ width: "100%", aspectRatio: "5/2" }}
      >
        {" "}
        <Slider sliderImage={sliderImage} />
      </div>
      <SpecialOffer />
      {(data || []).map((category) => {
        return (
          <CategoryCard
            categoryData={category}
            isErrorLoading={error}
            isLoading={isLoading}
          />
        );
      })}
      {/* <CategoryCard categoryData={categories} isLoading={isLoading} isErrorLoading={isErrorLoading}/>
        <CategoryCard categoryData={genderData} isLoading={isLoading} isErrorLoading={isErrorLoading}/> */}

      <PromotionalBanner />
    </div>
  );
}
