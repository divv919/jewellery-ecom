import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";
import formatCurrency from "../utils/formatCurrency";
import ProductDescription from "../components/ProductDescription/ProductDescription";
import ProductReviews from "../components/ProductActions/ProductImageGallery/ProductReviews/ProductReviews";
import ProductAction from "../components/ProductActions/ProductActions";
export default function ProductPage() {
  const params = useParams();

  const { data, isLoading, error, reFetch } = useFetch(
    `http://localhost:3000/api/productInfo/${params.id}`
  );

  if (isLoading) {
    return (
      <>
        <h1>Loading..</h1>
      </>
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
      <ProductAction data={data} />

      <ProductDescription
        description={data.description}
        productInfoSections={productInfoSections}
      />

      <ProductReviews oldData={data} />
    </div>
  );
}
