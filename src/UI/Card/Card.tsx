import styles from "./Card.module.css";
import { CardProps } from "../../utils/types.js";

export const Card = (props: CardProps) => {
  const { isFeatured, className, children } = props;

  return (
    <div
      className={`${styles.card} ${isFeatured ? styles.featured : ""} ${
        className ? " " + className : ""
      }`}
    >
      {children}
    </div>
  );
};
