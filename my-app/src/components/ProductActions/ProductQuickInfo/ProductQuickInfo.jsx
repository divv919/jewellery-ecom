import ShareIcon from "@mui/icons-material/Share";
import "./styles.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Snackbar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useContext } from "react";
import SnackBarContext from "../../SnackBarContext/SnackBarContext";
const ProductQuickInfo = ({ price, name, rating }) => {
  const { enableSnackBar } = useContext(SnackBarContext);

  return (
    <div className="product-details-section">
      <div className="product-name">
        <h2>{name}</h2>
      </div>
      <div className="product-rating-section">
        3
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
            <ShareIcon
              onClick={() => enableSnackBar("Copied Successfully", "success")}
              fontSize="small"
            />
          </button>
          <button>
            <FavoriteBorderIcon fontSize="small" />
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
