import styles from "./ProgressBar.module.css";
export default function ProgressBar() {
  return (
    <div className={styles.progressBar}>
      <div className={styles.progress}></div>
    </div>
  );
}
