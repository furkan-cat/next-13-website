import Skeleton from "../skeleton";
import styles from "./styles.module.scss";

export default function CategoriesLoading() {
  return (
    <div className={styles.wrapper}>
      {Array(5)
        .fill(null)
        .map((_, i) => (
          <Skeleton key={i} />
        ))}
    </div>
  );
}
