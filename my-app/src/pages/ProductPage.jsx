import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";
import formatCurrency from "../utils/formatCurrency";
import ProductDescription from "../components/ProductDescription/ProductDescription";
import ProductReviews from "../components/ProductReviews/ProductReviews";
import ProductAction from "../components/ProductActions/ProductActions";
import { Skeleton } from "@mui/material";
export default function ProductPage({ enableSnackBar }) {
  console.log(typeof enableSnackBar);
  const params = useParams();

  const { data, isLoading, error, reFetch } = useFetch(
    `http://localhost:3000/api/productInfo/${params.id}`
  );

  if (isLoading) {
    return (
      <div
        className="loader-section"
        style={{
          display: "flex",
          flexDirection: "row",
          height: "150vh",
          justifyContent: "space-between",
        }}
      >
        <div
          className="right-img-section"
          style={{
            width: "70%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            padding: "4%",
          }}
        >
          <Skeleton width="45%" height={400} variant="rectangular" />

          <Skeleton width="45%" height={400} variant="rectangular" />
        </div>
        <div
          className=" left-info-section"
          style={{
            width: "30%",
            padding: "2%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
          }}
        >
          <Skeleton variant="text" width="100%" height={80} />
          <Skeleton variant="text" width="70%" height={30} />
          <Skeleton variant="text" width="50%" height={70} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Skeleton width="47%" height={100} />
            <Skeleton width="47%" height={100} />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <>
        <h1>error..</h1>
      </>
    );
  }

  const gstAmount =
    ((data.diamond_price + data.making_charges + data.metal_price) * data.gst) /
    100;

  const hasDiamonds = data.number_of_diamonds && data.number_of_diamonds > 0;

  const productInfoSections = [
    {
      infoHeading: "General Details",
      infoItems: [
        { label: "Jewellery Type", value: data.type },
        { label: "Size", value: data.size },
        { label: "Occasion", value: data.occasion },
        { label: "Gender", value: data.gender },
      ],
    },
    {
      infoHeading: "Material Details",
      infoItems: [
        { label: "Metal Type", value: data.metal_type },
        { label: "Metal Weight", value: data.metal_weight },
        { label: "Karatage", value: data.karatage },
        ...(hasDiamonds
          ? [
              { label: "Number of Diamonds", value: data.number_of_diamonds },
              { label: "Diamond Weight", value: data.diamond_weight },
              { label: "Diamond Shape", value: data.diamond_shape },
              { label: "Diamond Color", value: data.diamond_color },
              { label: "Diamond Clarity", value: data.diamond_clarity },
            ]
          : []),
      ],
    },
    {
      infoHeading: "Price Breakup",
      infoItems: [
        { label: "Metal Price", value: formatCurrency(data.metal_price) },
        { label: "Making Charges", value: formatCurrency(data.making_charges) },
        ...(hasDiamonds
          ? [
              {
                label: "Diamond Price",
                value: formatCurrency(data.diamond_price),
              },
            ]
          : []),
        { label: "GST (3%)", value: formatCurrency(gstAmount) },
        { label: "Total Price", value: formatCurrency(data.price) },
      ],
    },
  ];
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#f5f5f5",
      }}
    >
      <ProductAction data={data} enableSnackBar={enableSnackBar} />

      <ProductDescription
        description={data.description}
        productInfoSections={productInfoSections}
      />

      <ProductReviews oldData={data} />
    </div>
  );
}
