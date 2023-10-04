"use client";
import classes from "./product-card.module.css";
import LinkButton from "./UI/LinkButton";

const ProductCard = ({ thumbnail, title, description, id, productPage }) => {
  return (
    <div className={classes["product-card-container"]}>
      <img className={classes.img} src={thumbnail} alt="" />

      <div className={classes.title}>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
      {!productPage && <LinkButton id={id}>see product</LinkButton>}
    </div>
  );
};

export default ProductCard;
