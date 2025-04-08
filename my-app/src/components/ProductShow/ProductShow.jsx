import "./styles.css";
import Image from "../Image/Image";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import SectionHeader from "../SectionHeader/SectionHeader";
export default function ProductShow() {
  const params = useParams();
  const { data, isLoading, error, reFetch } = useFetch(
    `http://localhost:3000/api/productInfo/${params.id}`
  );

  if (isLoading) {
    return (
      <>
        <h1>Loading..</h1>
      </>
    );
  }

  if (error) {
    return (
      <>
        <h1>error..</h1>
      </>
    );
  }

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div className="product-image-section">
          {data.images.map((img) => (
            <img src={img.image_url} />
          ))}
        </div>

        <div className="product-details-section">
          <div className="product-name">
            <h2>{data.name}</h2>
          </div>
          <div className="product-rating-section">
            <p>{data.rating} stars</p>
            <div className="product-activity-buttons">
              <button>Share</button>
              <button>Wishlist</button>
            </div>
          </div>
          <div className="product-price">
            <h1>
              {data.price.toLocaleString("en-IN", {
                minimumFractionDigits: 0,
                style: "currency",
                currency: "INR",
              })}
            </h1>
          </div>
          <div className="buy-buttons">
            <button>Add to Cart</button>
            <button>Buy now</button>
          </div>
        </div>
      </div>
      <div className="product-info-section">
        <div className="product-description">
          <SectionHeader
            title="Product Description"
            subtitle="Know your product"
          />
        </div>
        <div className="product-info">" {data.description} "</div>
      </div>
    </div>
  );
}
