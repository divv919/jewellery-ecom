import ShareIcon from "@mui/icons-material/Share";
import "./styles.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import { useContext, useState } from "react";
import SnackBarContext from "../../SnackBarContext/SnackBarContext";
import { useFetch } from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
const ProductQuickInfo = ({
  price,
  name,
  rating,
  id,
  is_favorite: initialIsFavorite,
}) => {
  const navigate = useNavigate();
  const { enableSnackBar } = useContext(SnackBarContext);
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite);
  const { reFetch } = useFetch(`http://localhost:3000/api/productInfo/${id}`);

  const handleShare = async () => {
    const location = window.location.href;

    try {
      await navigator.clipboard.writeText(location);
      enableSnackBar("Copied Successfully", "success");
    } catch (err) {
      enableSnackBar("Failed to copy", "error");
      console.error(err);
    }
  };

  const handleFavorite = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/accounts/favoritesInfo/${id}`,
        {
          method: isFavorite ? "DELETE" : "POST",
          credentials: "include",
        }
      );
      if (response.status === 401) {
        enableSnackBar("Please login", "error");
        navigate("/auth");
        return;
      }
      if (!response.ok) {
        throw new Error("Error updating favorite status");
      }
      setIsFavorite(!isFavorite);
      reFetch();
      enableSnackBar(
        isFavorite ? "Item removed from favorites" : "Item added to favorites",
        "success"
      );
    } catch (err) {
      console.error(err);
      enableSnackBar("Failed to update favorite status", "error");
    }
  };

  return (
    <div className="product-details-section">
      <div className="product-name">
        <h2>{name}</h2>
      </div>
      <div className="product-rating-section">
        <div className="product-rating">
          <button className="product-rating-summary">
            <p
              className="rating-number"
              style={{ color: "black", fontWeight: "400" }}
            >
              {rating}
            </p>
            <StarIcon fontSize="small" />
          </button>
        </div>
        <div className="product-activity-buttons">
          <button>
            <ShareIcon onClick={handleShare} fontSize="small" />
          </button>
          <button onClick={handleFavorite}>
            {isFavorite ? (
              <FavoriteIcon fontSize="small" style={{ color: "red" }} />
            ) : (
              <FavoriteBorderIcon fontSize="small" />
            )}
          </button>
        </div>
      </div>
      <div className="product-price">
        <h1>
          {price.toLocaleString("en-IN", {
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
  );
};

export default ProductQuickInfo;
