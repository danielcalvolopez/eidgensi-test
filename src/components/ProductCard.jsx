"use client";
import classes from "./product-card.module.css";
import Link from "next/link";

const ProductCard = ({ thumbnail, title, description, id, productPage }) => {
  return (
    <div className={classes["product-card-container"]}>
      <img className={classes.img} src={thumbnail} alt="" />
      <div className={classes["product-info"]}>
        <h3>{title}</h3>
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
    </div>
  );
};

export default ProductCard;
