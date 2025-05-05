import "./styles.css";
import { Skeleton } from "@mui/material";
import { useFetch } from "../../hooks/useFetch";
import Image from "../Image/Image";
import formatCurrency from "../../utils/formatCurrency";
import { useNavigate } from "react-router-dom";
export default function () {
  const navigate = useNavigate();
  const { data, isLoading, error, reFetch } = useFetch(
    `http://localhost:3000/api/accounts/cartInfo`
  );
  if (isLoading) {
    return (
      <div className="cart-section">
        <div className="cart-details">
          <div>
            <Skeleton height={200} />
          </div>
          <div>
            <Skeleton height={200} />
          </div>
          <div>
            <Skeleton height={200} />
          </div>
        </div>
        <div className="price-details">
          <Skeleton height={400} />
        </div>
      </div>
    );
  }

  const totalPrice = data.reduce(
    (sum, item) => sum + item.quantity * Number(item.product.price),
    0
  );
  const handleQuantityChange = async (product_id, increment) => {
    await fetch(
      `http://localhost:3000/api/accounts/cartInfo/${product_id}/${increment}`,
      {
        method: "PUT",
        credentials: "include",
      }
    );
    reFetch();
  };
  return (
    <div className="cart-section">
      <div className="cart-details">
        {data.map((product, index) => {
          return (
            <div key={index} className="product-in-cart">
              <div
                className="product-in-cart-image"
                onClick={() => navigate(`/product/${product.product_id}`)}
              >
                <Image src={product.product.images[0].image_url} />
              </div>
              <div className="product-in-cart-details">
                <div
                  onClick={() => navigate(`/product/${product.product_id}`)}
                  className="product-in-cart-name"
                >
                  <p>{product.product.name}</p>
                </div>
                <div className="product-in-cart-price">
                  <p> {formatCurrency(product.product.price)}</p>
                </div>
                <div className="product-in-cart-quantity">
                  <button
                    className="cart-increment-button"
                    onClick={() =>
                      handleQuantityChange(product.product_id, false)
                    }
                  >
                    -
                  </button>
                  <p>{product.quantity}</p>
                  <button
                    className="cart-decrement-button"
                    onClick={() =>
                      handleQuantityChange(product.product_id, true)
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="price-details">
        <div className="price-breakup">
          <p className="price-breakup-title">Price Breakup</p>
          {data.map((product, index) => {
            return (
              <div key={index} className="product-cart-price">
                <p>{product.product.name}</p>
                <p>
                  {product.quantity} x {formatCurrency(product.product.price)}
                </p>
              </div>
            );
          })}
          <div className="total-price">
            <p>Total Price : </p>
            <p>{formatCurrency(totalPrice)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
