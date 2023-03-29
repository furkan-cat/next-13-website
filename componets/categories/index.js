import Link from "next/link";
import styles from "./styles.module.scss";

export default function Categories({ categories }) {
  return (
    <div className={styles.wrapper}>
      {categories.map((category) => (
        <Link
          href={`/${category.id}`}
          key={category.id}
          className={styles.category}
        >
          <div>{category.name}</div>
        </Link>
      ))}
    </div>
  );
}
