import Image from "../../../Image/Image";
import { Skeleton } from "@mui/material";
const AllCards = ({ categoryData, navigate, isLoading }) => {
  function handleMouseClick(id) {
    navigate(`/product/${id}`);
  }
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {Array(16)
          .fill(0)
          .map((_, index) => (
            <div style={{ margin: "2%" }}>
              <Skeleton variant="rectangular" height={250} width={250} />
              <Skeleton variant="text" width={120} height={30} />
              <Skeleton variant="text" width={150} />
            </div>
          ))}
      </div>
    );
  }
  return (
    <div className="all-cards">
      {categoryData.length == 0 ? (
        <h1>No data</h1>
      ) : (
        categoryData.map((item, index) => (
          <div
            className="card"
            // onMouseOver={() => handleMouseOver(index)}
            // onMouseLeave={() => {
            //   setActiveCard(null);
            // }}
            onClick={() => handleMouseClick(item.id)}
            key={item.id}
          >
            <div className="imgview">
              <div className="image-carousel">
                {item.images.map((i, index) => {
                  return (
                    <div
                      className="img1"
                      key={i.image_id}
                      style={{ minHeight: "220px" }}
                    >
                      <Image src={i.image_url} />
                    </div>
                  );
                })}
              </div>
            </div>

            <p className="products-price">
              {item.price.toLocaleString("en-IN", {
                minimumFractionDigits: 0,
                style: "currency",
                currency: "INR",
              })}
            </p>
            <p className="products-name">{item.name}</p>
          </div>
        ))
      )}
    </div>
  );
};
export default AllCards;
