import Cards from "../components/Cards/Cards";
import { useSearchParams } from "react-router-dom";
// import productData from "../assets/productData";
import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import SortAndFilter from "../components/SortAndFilter/SortAndFilter";
export default function CategoryPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();

  const { data, error, isLoading, reFetch } = useFetch(
    `http://localhost:3000/api/products/${params.categoryType}/${params.categoryName}?${searchParams}`
  );
  return (
    <>
      {/* <SortAndFilter selectedSort={sort} selectedCategory = {category}
    updateCategory = {updateCategory} 
    updateSort={updateSort} /> */}
      <Cards categoryData={data || []} categoryTitle="Explore" />
    </>
  );
}
