"use client";
import getProduct from "../utils/getProduct";

const ProductPage = async ({ params }) => {
  const product = await getProduct(params.productId);

  return <div>{product.title}</div>;
};

export default ProductPage;
