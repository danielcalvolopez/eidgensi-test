"use client";
import ProductCard from "@/components/ProductCard";
import getProduct from "../utils/getProduct";
import classes from "./product-page.module.css";
import Link from "next/link";

const ProductPage = async ({ params }) => {
  const product = await getProduct(params.productId);

  return (
    <div className={classes["product-page-container"]}>
      <div className={classes.navigation}>
        <Link
          href={{
            pathname: "/",
          }}
        >
          Go back
        </Link>
      </div>
      <ProductCard
        productPage
        title={product.title}
        description={product.description}
        id={product.id}
        thumbnail={product.thumbnail}
      />
    </div>
  );
};

export default ProductPage;
