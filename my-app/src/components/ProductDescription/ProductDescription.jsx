import "./styles.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import InfoTable from "../InfoTable/InfoTable";

const ProductDescription = ({ productInfoSections, description }) => (
  <div className="product-info-section">
    <SectionHeader title="Product Description" subtitle="Know your product" />
    <div className="product-info-description">" {description} "</div>
    <div className="product-info">
      {productInfoSections.map((item, index) => (
        <InfoTable data={item} key={index} />
      ))}
    </div>
  </div>
);

export default ProductDescription;
