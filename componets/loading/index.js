import styles from "./styles.module.scss";

/**
 * 
 * @param {string} size SM, md, lg 
 * @returns void
 */

export default function Loading({ size = "sm" }) {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.spinner} ${styles[`size_${size}`]}`}></div>
    </div>
  );
}
