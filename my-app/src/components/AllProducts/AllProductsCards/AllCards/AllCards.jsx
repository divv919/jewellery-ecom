import Image from "../../../Image/Image";
import { Skeleton } from "@mui/material";
import { useFetch } from "../../../../hooks/useFetch";
import formatCurrency from "../../../../utils/formatCurrency";
import { useState } from "react";
const AllCards = ({ searchParams, setSearchParams, navigate, params }) => {
  function handleMouseClick(id) {
    navigate(`/product/${id}`);
  }
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);

  const { data, error, isLoading, reFetch } = useFetch(
    `http://localhost:3000/api/products/${params.categoryType}/${params.categoryName}?${searchParams}&page=${currentPage}`
  );

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
      {data.products.length == 0 ? (
        <h1>No data</h1>
      ) : (
        data.products.map((item, index) => (
          <div
            className="card"
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

            <p className="products-price">{formatCurrency(item.price)}</p>
            <p className="products-name">{item.name}</p>
          </div>
        ))
      )}
    </div>
  );
};
export default AllCards;
