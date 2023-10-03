import getProducts from "@/app/utils/getProducts";
import classes from "./products.module.css";

const Products = async () => {
  const posts = await getProducts();
  console.log(posts);
  return <div className={classes["products-container"]}>products</div>;
};

export default Products;
