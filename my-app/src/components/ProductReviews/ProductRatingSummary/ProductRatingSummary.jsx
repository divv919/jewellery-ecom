import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import "./styles.css";
const ProductRatingSummary = ({ data, oldData }) => {
  return (
    <div className="product-all-ratings">
      <p className="average-rating-title">Average Rating</p>
      <p className="average-rating-number"> {oldData.rating} /5</p>
      <p className="total-review-number">{oldData.rating_count} reviews</p>

      <div className="average-rating-showcase">
        <div className="average-rating-stars-border">
          <StarBorderIcon />
          <StarBorderIcon />
          <StarBorderIcon />
          <StarBorderIcon />
          <StarBorderIcon />
        </div>
        <div
          className="average-rating-stars-filled"
          style={{ width: `${(oldData.rating / 5) * 100}%` }}
        >
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
      </div>
      <div className="rating-count-showcase">
        {data?.reviewDistribution.map((count, index) => {
          return (
            <div className="star-rating-count">
              <div className="star-rating-value">
                {5 - index} <StarIcon fontSize="small" />
              </div>
              <div className="star-rating-visualizer">
                <div className="visualizer-window">
                  <div
                    className="rating-bar"
                    style={{
                      width: `${(count / oldData.rating_count) * 100}%`,
                    }}
                  ></div>
                </div>
                <div className="visualizer-count">({count})</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ProductRatingSummary;
