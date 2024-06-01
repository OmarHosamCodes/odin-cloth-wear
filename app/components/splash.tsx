"use client";
import { useRef } from "react";
import styles from "./splash.module.css";
export default function Splash() {
  const splashRef = useRef<HTMLDivElement | null>();

  setTimeout(() => {
    if (splashRef.current) {
      splashRef.current.style.display = "none";
    }
  }, 3900);

  return (
    <div className={styles.splashScreen} ref={splashRef as any}>
      <div className={styles.left} />
      <div className={styles.right} />
      <div className={styles.progressBar} />
    </div>
  );
}
