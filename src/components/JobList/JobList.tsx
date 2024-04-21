import styles from "./JobList.module.css";
import data from "../../mock/data.json";
import { JobPosition } from "../JobPosition/JobPosition.js";

export const JobList = () => {
  return (
    <div className={styles.jobList}>
      {data.map((item) => (
        <JobPosition key={item.id} {...item} />
      ))}
    </div>
  );
};
