import Cards from "../components/Cards/Cards";
// import productData from "../assets/productData";
import AllProductsHeader from "../components/AllProducts/AllProductsHeader/Header";
import AllProductsFilter from "../components/AllProducts/AllProductsFilter/Filter";
import AllProductsCards from "../components/AllProducts/AllProductsCards/Cards";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";

export default function CategoryPage() {
  const [searchParams, _] = useSearchParams();
  const params = useParams();
  const navigate = useNavigate();
  console.log(params.categoryType, params.categoryName);
  const { data, error, isLoading, reFetch } = useFetch(
    `http://localhost:3000/api/products/${params.categoryType}/${params.categoryName}?${searchParams}`
  );

  const [showSortDropdown, setShowSortDropdown] = useState(false);

  return (
    <>
      <div className="section">
        <AllProductsHeader />
      </div>
      <div className="products-section-items">
        <AllProductsFilter setShowSortDropdown={setShowSortDropdown} />
        <AllProductsCards
          categoryData={data}
          setShowSortDropdown={setShowSortDropdown}
          showSortDropdown={showSortDropdown}
          navigate={navigate}
          isLoading={isLoading}
        />
      </div>
    </>
  );
}
