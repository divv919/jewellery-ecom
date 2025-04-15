import "./styles.css";
import Image from "../../Image/Image";
const ProductImageGallery = ({ images }) => (
  <div className="product-image-section">
    {images.map((image, index) => (
      <div className="product-image-container">
        <Image key={index} src={image.image_url} />
      </div>
    ))}
  </div>
);
export default ProductImageGallery;
