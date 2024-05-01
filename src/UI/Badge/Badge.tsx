import styles from "./Badge.module.css";
import { BadgeProps } from "../../utils/types.js";
import Remove from "../../assets/images/icon-remove.svg?react";

export const Badge = (props: BadgeProps) => {
  const {
    variant = "basic",
    colorScheme = "light",
    onClick,
    children,
    onClear,
  } = props;

  return (
    <div
      className={`${styles.badge} ${styles[variant]} ${styles[colorScheme]}`}
      onClick={onClick}
    >
      <span>{children}</span>
      {variant === "clearable" && (
        <div className={styles.badge_remover} onClick={onClear}>
          <Remove />
        </div>
      )}
    </div>
  );
};
