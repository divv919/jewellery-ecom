import StarIcon from "@mui/icons-material/Star";
import "./styles.css";
import { Skeleton } from "@mui/material";
import SkeletonImageLoader from "../../SkeletonImageLoader/SkeletonImageLoader";
import formatDate from "../../../utils/formatDate";
const ProductAllReviews = ({
  data,
  currentPage,
  setCurrentPage,
  isLoading,
  error,
}) => {
  if (isLoading) {
    return (
      <div className="product-all-reviews">
        <p className="product-all-reviews-header">Reviews</p>
        {[...Array(4)].map((_, index) => (
          <div
            className="product-all-reviews-review-info"
            style={{ margin: "20px 0" }}
            key={index}
          >
            <div className="user-review-personal-details">
              <div className="user-review-personal-section">
                <div className="user-review-name-section">
                  <Skeleton variant="text" width={120} height={20} />
                  <Skeleton variant="text" width={80} height={16} />
                </div>
                <div>
                  <Skeleton variant="text" width={100} height={16} />
                </div>
              </div>
            </div>
            <Skeleton variant="text" width={60} height={20} />
            <Skeleton variant="rectangular" width="100%" height={40} />
          </div>
        ))}
        <Skeleton variant="rectangular" width={100} height={30} />
        <Skeleton variant="text" width={30} height={20} />
      </div>
    );
  }

  return (
    <div className="product-all-reviews">
      <p className="product-all-reviews-header">Reviews</p>
      {data.reviews.map((review) => (
        <div className="product-all-reviews-review-info">
          <div className="user-review-personal-details">
            <div className="user-review-personal-section">
              <div className="user-review-name-section">
                <p className="user-review-full-name">
                  {review.user.first_name} {review.user.last_name}
                </p>
                <p className="user-review-username">@{review.user.username}</p>
              </div>
              <div>
                <p className="user-review-created-at">
                  {formatDate(new Date(review.user.created_at))}
                </p>
              </div>
            </div>
          </div>

          <p className="user-review-rating">
            {review.rating}
            <StarIcon fontSize="small" />
          </p>
          <p className="user-review-comment">{review.comment}</p>
        </div>
      ))}
      <div
        className="test"
        onClick={() => {
          setCurrentPage(currentPage === data.totalPages ? 1 : currentPage + 1);
        }}
      >
        Next Page
      </div>
      <div className="current-page">{data.currentPage}</div>
    </div>
  );
};
export default ProductAllReviews;
