import Cards from "../components/Cards/Cards";
// import productData from "../assets/productData";
import AllProductsHeader from "../components/AllProducts/AllProductsHeader/Header";
import AllProductsFilter from "../components/AllProducts/AllProductsFilter/Filter";
import AllProductsCards from "../components/AllProducts/AllProductsCards/Cards";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function CategoryPage() {
  const navigate = useNavigate();

  const [showSortDropdown, setShowSortDropdown] = useState(false);

  return (
    <>
      <div className="section">
        <AllProductsHeader />
      </div>
      <div className="products-section-items">
        <AllProductsFilter setShowSortDropdown={setShowSortDropdown} />
        <AllProductsCards
          setShowSortDropdown={setShowSortDropdown}
          showSortDropdown={showSortDropdown}
          navigate={navigate}
        />
      </div>
    </>
  );
}
