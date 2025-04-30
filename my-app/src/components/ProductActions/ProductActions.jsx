import ProductImageGallery from "./ProductImageGallery/ProductImageGallery";

import ProductQuickInfo from "./ProductQuickInfo/ProductQuickInfo";

const ProductAction = ({ data, enableSnackBar }) => (
  <div style={{ display: "flex" }}>
    <ProductImageGallery images={data.images} />
    <ProductQuickInfo
      enableSnackBar={enableSnackBar}
      name={data.name}
      price={data.price}
      rating={data.rating}
    />
  </div>
);
export default ProductAction;
