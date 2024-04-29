import styles from "./FilterPanel.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectFilters } from "../../store/filters/filterSelectors.js";
import {
  removeFilter,
  clearFilter,
} from "../../store/filters/filterActions.js";
import { Badge } from "../../UI/Badge/Badge.js";
import { Card } from "../../UI/Card/Card.js";
import { Stack } from "../../UI/Stack/Stack.js";

export const FilterPanel = () => {
  const currentFilters = useSelector(selectFilters);
  const dispatch = useDispatch();

  if (currentFilters.length === 0) {
    return null;
  }

  return (
    <Card>
      <div className={styles.filterPanel}>
        <Stack>
          {currentFilters.map((filter) => (
            <Badge
              key={filter}
              variant="clearable"
              onClear={() => dispatch(removeFilter(filter))}
            >
              {filter}
            </Badge>
          ))}
        </Stack>
        <button
          className={styles.filterPanel_link}
          onClick={() => dispatch(clearFilter)}
        >
          Clear
        </button>
      </div>
    </Card>
  );
};
