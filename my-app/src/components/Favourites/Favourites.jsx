import { useFetch } from "../../hooks/useFetch";
import { Skeleton } from "@mui/material";
import Image from "../Image/Image";
import formatCurrency from "../../utils/formatCurrency";
import "./styles.css";
export default function Favourites() {
  const { data, isLoading, error } = useFetch(
    `http://localhost:3000/api/accounts/favoritesInfo`
  );
  if (isLoading) {
    return <Skeleton />;
  }
  return (
    <div className="favorite-show-section">
      {data?.map((product, index) => {
        return (
          <div className="favorite">
            <div className="favorite-image">
              <Image src={`${product.product.images[0].image_url}`} />
            </div>
            <div className="favorite-details">
              <p>{product.product.name}</p>
              <p>Price : {formatCurrency(product.product.price)}</p>
              <button className="remove-button">Remove</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
