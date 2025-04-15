import "./styles.css";
const ProductImageGallery = ({ images }) => (
  <div className="product-image-section">
    {images.map((image, index) => (
      <img key={index} src={image.image_url} />
    ))}
  </div>
);
export default ProductImageGallery;
