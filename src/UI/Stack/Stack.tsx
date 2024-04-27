import styles from "./Stack.module.css";
import { StackProps } from "../../utils/types.js";

export const Stack = (props: StackProps) => {
  const { children, position } = props;

  return (
    <div
      className={styles.stack}
      style={{
        justifyContent: position === "center" ? "center" : `flex-${position}`,
      }}
    >
      {children}
    </div>
  );
};
