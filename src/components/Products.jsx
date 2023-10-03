import getProducts from "@/app/utils/getProducts";
import classes from "./products.module.css";
import ProductCard from "./ProductCard";

const Products = async () => {
  const data = await getProducts();

  console.log(data.products);

  return (
    <div className={classes["products-container"]}>
      <div className={classes.products}>
        {data.products.map(({ title, description, thumbnail, id }) => (
          <ProductCard
            key={id}
            id={id}
            title={title}
            description={description}
            thumbnail={thumbnail}
            products={data.products}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
