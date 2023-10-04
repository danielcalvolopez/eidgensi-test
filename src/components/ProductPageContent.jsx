import ProductCard from "@/components/ProductCard";
import classes from "./product-page-content.module.css";
import Link from "next/link";
import getProducts from "@/app/utils/getProducts";
import getProduct from "@/app/utils/getProduct";

const ProductPageContent = async ({ params }) => {
  const data = await getProducts();

  // option 1: This function looks through the whole list of products and finds the one that matches the ID.
  const currentProduct = await data.products.find(
    (product) => product.id == params.productId
  );

  // option 2: It fetches the product straight with the ID in the API.
  // const currentProduct = await getProduct(params.productId);

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
        title={currentProduct?.title}
        description={currentProduct?.description}
        id={currentProduct?.id}
        thumbnail={currentProduct?.thumbnail}
      />
    </div>
  );
};

export default ProductPageContent;
