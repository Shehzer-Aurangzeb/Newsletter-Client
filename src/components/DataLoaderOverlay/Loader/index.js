import React from "react";
import styles from "./styles.module.css";
function Loader() {
  return (
    <div className={styles["bouncing-loader"]}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loader;
