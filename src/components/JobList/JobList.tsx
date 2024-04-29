import styles from "./JobList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectVisiblePositions } from "../../store/positions/positionSelectors.js";
import { selectFilters } from "../../store/filters/filterSelectors.js";
import { addFilter } from "../../store/filters/filterActions.js";
import { JobPosition } from "../JobPosition/JobPosition.js";
import { JobPositionProps } from "../../utils/types.js";

export const JobList = () => {
  const dispatch = useDispatch();
  const currentFilters: string[] = useSelector(selectFilters);

  const positions = useSelector(
    (state: {
      positions: {
        role: string;
        level: string;
        languages: string[];
        tools: string[];
      }[];
    }) => selectVisiblePositions(state, currentFilters)
  );

  const handleAddFilter = (filter: string) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className={styles.jobList}>
      {positions.map((item: JobPositionProps) => (
        <JobPosition
          key={item.id}
          handleAddFilter={handleAddFilter}
          {...item}
        />
      ))}
    </div>
  );
};
