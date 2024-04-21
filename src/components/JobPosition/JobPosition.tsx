import styles from "./JobPosition.module.css";
import { JobPositionProps } from "../../utils/types.js";
import { Badge } from "../../UI/Badge/Badge.js";
import { Card } from "../../UI/Card/Card.js";
import { Stack } from "../../UI/Stack/Stack.js";

export const JobPosition = (props: JobPositionProps) => {
  const {
    company,
    logo,
    new: isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = props;

  const badges: string[] = [role, level, ...languages, ...tools];

  return (
    <Card isFeatured={featured}>
      <div className={styles.jobPosition}>
        <div className={styles.jobPosition_info}>
          <img className={styles.jobPosition_logo} src={logo} alt={company} />
          <div className={styles.jobPosition_body}>
            <div className={styles.jobPosition_company}>
              <h3>{company}</h3>
              {(isNew || featured) && (
                <Stack>
                  {isNew && (
                    <Badge variant="rounded" colorScheme="primary">
                      NEW!
                    </Badge>
                  )}
                  {featured && (
                    <Badge variant="rounded" colorScheme="dark">
                      FEATURED
                    </Badge>
                  )}
                </Stack>
              )}
            </div>
            <h2 className={styles.jobPosition_title}>{position}</h2>
            <Stack position="start">
              <div className={styles.jobPosition_meta}>{postedAt}</div>
              <div className={styles.jobPosition_meta}>{contract}</div>
              <div className={styles.jobPosition_meta}>{location}</div>
            </Stack>
          </div>
        </div>
        <Stack>
          {badges.map((item, index) => (
            <Badge key={index}>{item}</Badge>
          ))}
        </Stack>
      </div>
    </Card>
  );
};
