import ProductImageGallery from "./ProductImageGallery/ProductImageGallery";

import ProductQuickInfo from "./ProductQuickInfo/ProductQuickInfo";

const ProductAction = ({ data }) => (
  <div style={{ display: "flex" }}>
    <ProductImageGallery images={data.images} />
    <ProductQuickInfo
      name={data.name}
      price={data.price}
      rating={data.rating}
    />
  </div>
);
export default ProductAction;
