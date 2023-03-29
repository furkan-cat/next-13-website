import React from "react";
import Loading from "../loading";
import styles from "./styles.module.scss";

export default function MovieInfoLoading() {
  return (
    <div className={styles.wrapper} style={{ height: 265 }}>
      <Loading />
    </div>
  );
}
