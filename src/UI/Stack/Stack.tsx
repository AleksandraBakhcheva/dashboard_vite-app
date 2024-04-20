import styles from "./Stack.module.css";
import { StackProps } from "../../utils/types.js";

export const Stack = (props: StackProps) => {
  const { children } = props;

  return <div className={styles.stack}>{children}</div>;
};
