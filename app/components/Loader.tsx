import React from "react";
import styles from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loaderSpinner}></div>
    </div>
  );
};

export default Loader;
