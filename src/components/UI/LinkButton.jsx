import Link from "next/link";
import classes from "./link-button.module.css";

const LinkButton = ({ id, children }) => {
  return (
    <Link
      className={classes.button}
      href={{
        pathname: `/${id}`,
      }}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
