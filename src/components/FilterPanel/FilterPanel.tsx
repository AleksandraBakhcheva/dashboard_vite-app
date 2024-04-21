import styles from "./FilterPanel.module.css";
import { Badge } from "../../UI/Badge/Badge.js";
import { Card } from "../../UI/Card/Card.js";
import { Stack } from "../../UI/Stack/Stack.js";

export const FilterPanel = () => {
  return (
    <Card>
      <div className={styles.filterPanel}>
        <Stack>
          <Badge variant="clearable">Frontend</Badge>
          <Badge variant="clearable">Backend</Badge>
          <Badge variant="clearable">React</Badge>
        </Stack>
        <button className={styles.filterPanel_link}>Clear</button>
      </div>
    </Card>
  );
};
