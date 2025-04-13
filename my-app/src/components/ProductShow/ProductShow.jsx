import "./styles.css";
import { useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import SectionHeader from "../SectionHeader/SectionHeader";
import InfoTable from "../InfoTable/InfoTable";
import Image from "../Image/Image";
import formatCurrency from "../../utils/formatCurrency";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
export default function ProductShow() {
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
    <div>
      <div style={{ display: "flex" }}>
        <div className="product-image-section">
          {data.images.map((img, index) => (
            <img key={index} src={img.image_url} />
          ))}
        </div>

        <div className="product-details-section">
          <div className="product-name">
            <h2>{data.name}</h2>
          </div>
          <div className="product-rating-section">
            <div className="product-rating">
              <button className="product-rating-summary">
                <p
                  className="rating-number"
                  style={{ color: "black", fontWeight: "400" }}
                >
                  {data.rating}
                </p>
                <StarIcon fontSize="small" />
              </button>
            </div>
            <div className="product-activity-buttons">
              <button>
                <ShareIcon fontSize="small" />
              </button>
              <button>
                <FavoriteBorderIcon fontSize="small" />
              </button>
            </div>
          </div>
          <div className="product-price">
            <h1>
              {data.price.toLocaleString("en-IN", {
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
      </div>
      <div className="product-info-section">
        <div className="product-description">
          <SectionHeader
            title="Product Description"
            subtitle="Know your product"
          />
        </div>
        <div className="product-info-description">" {data.description} "</div>
        <div className="product-info">
          {productInfoSections.map((item, index) => (
            <InfoTable data={item} key={index} />
          ))}
        </div>
      </div>
      <div className="product-review-section"></div>
    </div>
  );
}
