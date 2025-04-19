import Image from "../../../Image/Image";
import { prerelease, Skeleton } from "@mui/material";
import { useFetch } from "../../../../hooks/useFetch";
import formatCurrency from "../../../../utils/formatCurrency";
import { useEffect, useState, useCallback, useRef } from "react";
import Slider from "../../../Carousel/Slider";

const AllCards = ({ searchParams, setSearchParams, navigate, params }) => {
  function handleMouseClick(id) {
    navigate(`/product/${id}`);
  }
  const [currentPage, setCurrentPage] = useState(1);
  const [productsToShow, setProductsToShow] = useState([]);
  const loaderRef = useRef(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const { data, error, isLoading, reFetch } = useFetch(
    `http://localhost:3000/api/products/${params.categoryType}/${params.categoryName}?${searchParams}&page=${currentPage}`
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [params, searchParams]);

  useEffect(() => {
    if (data && Number(data.currentPage) === currentPage && !isLoading) {
      console.log("Adding data");

      if (currentPage === 1) {
        setProductsToShow(data.products);
        console.log("Added initial data for page 1");
        // debugger;
      } else {
        console.log("Setting new products data of page : ", data.currentPage);
        // debugger;
        setProductsToShow((prev) => [...prev, ...data.products]);
      }
      setIsLoadingMore(false);
    }
  }, [data, currentPage, isLoading]);

  const observerCallback = useCallback(
    (entries) => {
      console.log("Using callback");
      console.log("isLoadingMore : ", isLoadingMore);
      console.log("data.hasMore : ", data.hasMore);
      // debugger;
      const [entry] = entries;
      console.log("Is intersecting : ", entry.isIntersecting);
      if (entry.isIntersecting && data && data.hasMore && !isLoadingMore) {
        setCurrentPage((prev) => prev + 1);
        // reFetch();
        // debugger;
        setIsLoadingMore(true);
      }
    },
    [data, isLoadingMore]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });

    if (loaderRef.current) {
      console.log("observer mounted");
      // debugger;
      observer.observe(loaderRef.current);
    } else {
      console.log("loaderRef.current is NULL");
      // debugger;
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
        console.log("unobserved");
        // debugger;
      }
    };
  }, [observerCallback]);
  // // debugger;
  if (isLoading && currentPage === 1) {
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
    <>
      {productsToShow.length == 0 ? (
        <div style={{ height: "200vh" }}>
          <h1>No data</h1>
        </div>
      ) : (
        <div className="all-cards">
          {productsToShow.map((item, index) => {
            console.log(item);
            return (
              <div
                className="card"
                onClick={() => handleMouseClick(item.id)}
                key={item.id}
              >
                <div className="imgview">
                  <Image src={item.image} />
                </div>

                <p className="products-price">{formatCurrency(item.price)}</p>
                <p className="products-name">{item.name}</p>
              </div>
            );
          })}
        </div>
      )}
      <div
        className="products-loader-section"
        ref={loaderRef}
        style={{
          display: data?.hasMore ? "flex" : "none",
        }}
      >
        <div
          className={
            isLoadingMore
              ? "products-loader active"
              : "products-loader inactive"
          }
        ></div>
      </div>
    </>
  );
};
export default AllCards;
