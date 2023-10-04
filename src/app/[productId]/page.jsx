import ProductCard from "@/components/ProductCard";
import getProduct from "../utils/getProduct";
import classes from "./product-page.module.css";
import Link from "next/link";
import getProducts from "../utils/getProducts";
import ProductPageContent from "@/components/ProductPageContent";

const ProductPage = async ({ params }) => {
  return <ProductPageContent params={params} />;
};

export default ProductPage;
