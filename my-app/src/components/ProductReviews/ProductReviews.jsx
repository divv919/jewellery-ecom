import "./styles.css";
import SectionHeader from "../../../SectionHeader/SectionHeader";
import ProductRatingSummary from "../../../ProductAllReviews/ProductRatingSummary/ProductRatingSummary";
import { useParams } from "react-router";
import { useFetch } from "../../../../hooks/useFetch";
import { useState } from "react";
import ProductAllReviews from "../../../ProductAllReviews/ProductAllReviews";

const ProductReviews = ({ oldData }) => {
  const params = useParams();
  const [currentPage, setCurrentPage] = useState(1);

  const { data, error, isLoading } = useFetch(
    `http://localhost:3000/api/productInfo/${params.id}/reviews?page=${currentPage}`
  );

  return (
    <div className="product-review-complete-section">
      <SectionHeader
        title="Product Reviews"
        subtitle="See what others say about this product"
      />
      <div className="product-review-section">
        <ProductRatingSummary oldData={oldData} data={data} />
        <ProductAllReviews
          data={data}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </div>
  );
};

export default ProductReviews;
