import styles from "./Stack.module.css";
import { StackProps } from "../../utils/types.js";

export const Stack = (props: StackProps) => {
  const { position, children } = props;

  return (
    <div
      className={styles.container}
      style={{
        justifyContent: position === "center" ? "center" : `flex-${position}`,
      }}
    >
      {children}
    </div>
  );
};
