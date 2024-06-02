import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/breadcrums/Breadcrum";
import ProductDisplay from "../components/productdisplay/ProductDisplay";
import Descriptionbox from "../components/descriptionbox/Descriptionbox";
import RelatedProducts from "../components/relatedproducts/RelatedProducts";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <Descriptionbox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
