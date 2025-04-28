import { Skeleton } from "@mui/material";
import { useFetch } from "../../hooks/useFetch";
import "./styles.css";
import formatCurrency from "../../utils/formatCurrency";
import Image from "../Image/Image";
import formatDate from "../../utils/formatDate";
export default function Orders() {
  const { data, isLoading, error } = useFetch(
    `http://localhost:3000/api/accounts/orderInfo`
  );
  console.log(isLoading, " ", data);
  console.log(typeof data);
  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <div className="order-show-section">
      {data?.map((product, index) => {
        return (
          <div className="order">
            <div className="order-image">
              <Image src={`${product.product.images[0].image_url}`} />
            </div>
            <div className="order-details">
              <p>{product.product.name}</p>
              <p>
                Total price :{" "}
                {formatCurrency(product.product.price * product.quantity)}
              </p>
              <p>Quantity : {product.quantity}</p>
              {/* <p>Item price : {product.product.price}</p> */}
              <p>Ordered on : {formatDate(new Date(product.created_at))}</p>

              <p>Order status : {product.order_status}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
