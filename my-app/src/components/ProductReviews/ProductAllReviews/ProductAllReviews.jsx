import StarIcon from "@mui/icons-material/Star";

const ProductAllReviews = ({
  data,
  currentPage,
  setCurrentPage,
  isLoading,
  error,
}) => {
  if (isLoading) {
    return (
      <div style={{ width: "65%", height: "800px", backgroundColor: "white" }}>
        Loading
      </div>
    );
  }
  return (
    <div className="product-all-reviews">
      <p className="product-all-reviews-header">Reviews</p>
      {data.reviews.map((review) => {
        return (
          <div className="product-all-reviews-review-info">
            <div className="user-review-personal-details">
              <div className="user-review-personal-section">
                <div className="user-review-name-section">
                  <p className="user-review-full-name">
                    {review.user.first_name} {review.user.last_name}
                  </p>
                  <p className="user-review-username">
                    @{review.user.username}
                  </p>
                </div>
                <div>
                  <p className="user-review-created-at">
                    {new Date(review.user.created_at).toLocaleDateString(
                      "en-IN"
                    )}
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
        );
      })}
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
