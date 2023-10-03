"use client";
import classes from "./product-card.module.css";
import Link from "next/link";

const ProductCard = ({ thumbnail, title, description, id, productPage }) => {
  return (
    <div className={classes["product-card-container"]}>
      <img className={classes.img} src={thumbnail} alt="" />

      <div className={classes.title}>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
      {!productPage && (
        <Link
          className={classes.button}
          href={{
            pathname: `/${id}`,
          }}
        >
          see product{" "}
        </Link>
      )}
    </div>
  );
};

export default ProductCard;
