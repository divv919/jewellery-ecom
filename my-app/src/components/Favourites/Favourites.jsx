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
  const handleRemove = async (item_id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/accounts/favoritesInfo/${item_id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
      if (!response.ok) {
        throw new Error("Error removing favorite item");
      }
      reFetch();
    } catch (err) {
      console.error(err);
    }
  };
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
              <button
                className="remove-button"
                onClick={() => handleRemove(product.product_id)}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
