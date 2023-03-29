import styles from "./styles.module.scss";

export default function Skeleton({ width, height }) {
  return (
    <div
      className={styles.skeleton}
      style={{ width: width, height: height }}
    ></div>
  );
}
