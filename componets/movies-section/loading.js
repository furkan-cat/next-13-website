import Skeleton from "../skeleton";
import styles from "./styles.module.scss";

export default function MovieSectionLoading() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Skeleton width={128} height={48} />
      </div>
      <div className={styles.moviesContainer}>
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <div key={i} className={styles.movie}>
              <Skeleton />
            </div>
          ))}
      </div>
    </div>
  );
}
