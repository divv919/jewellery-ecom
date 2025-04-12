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
        <div className="product-info-description">" {data.description} "</div>
        <div className="product-info">
          <div className="product-info-details">
            <table>
              <tr>
                <td>
                  <p>Number of Diamonds</p>
                </td>
                <td className="product-info-value">
                  <p>{data.number_of_diamonds}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Diamond Weight</p>
                </td>
                <td className="product-info-value">
                  <p>{data.diamond_weight}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Diamond Shape</p>
                </td>
                <td className="product-info-value">
                  <p>{data.diamond_shape}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Diamond Color</p>
                </td>
                <td className="product-info-value">
                  <p>{data.diamond_color}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Diamond Clarity</p>
                </td>
                <td className="product-info-value">
                  <p>{data.diamond_clarity}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Metal Type</p>
                </td>
                <td className="product-info-value">
                  <p>{data.metal_type}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Metal Weight</p>
                </td>
                <td className="product-info-value">
                  <p>{data.metal_weight}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Karatage</p>
                </td>
                <td className="product-info-value">
                  <p>{data.karatage}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Jewellery Type</p>
                </td>
                <td className="product-info-value">
                  <p>{data.type}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Size</p>
                </td>
                <td className="product-info-value">
                  <p>{data.size}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Occasion</p>
                </td>
                <td className="product-info-value">
                  <p>{data.occasion}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Gender</p>
                </td>
                <td className="product-info-value">
                  <p>{data.gender}</p>
                </td>
              </tr>
            </table>
          </div>

          <div className="product-info-price-breakup">
            <table>
              <tr>
                <td>
                  <p>Metal Price</p>
                </td>
                <td className="product-info-value">
                  <p>
                    {data.metal_price.toLocaleString("en-IN", {
                      style: "currency",
                      currency: "INR",
                      maximumFractionDigits: 0,
                    })}
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Diamond Price</p>
                </td>
                <td className="product-info-value">
                  <p>
                    {data.diamond_price.toLocaleString("en-IN", {
                      style: "currency",
                      currency: "INR",
                      maximumFractionDigits: 0,
                    })}
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Making Charges</p>
                </td>
                <td className="product-info-value">
                  <p>
                    {data.making_charges.toLocaleString("en-IN", {
                      style: "currency",
                      currency: "INR",
                      maximumFractionDigits: 0,
                    })}
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>GST (3%)</p>
                </td>
                <td className="product-info-value">
                  <p>
                    {(
                      (data.metal_price +
                        data.diamond_price +
                        data.making_charges) *
                      0.03
                    ).toLocaleString("en-IN", {
                      style: "currency",
                      currency: "INR",
                      maximumFractionDigits: 0,
                    })}
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Total Price</p>
                </td>
                <td className="product-info-value">
                  <p>
                    {data.price.toLocaleString("en-IN", {
                      style: "currency",
                      currency: "INR",
                      maximumFractionDigits: 0,
                    })}
                  </p>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
