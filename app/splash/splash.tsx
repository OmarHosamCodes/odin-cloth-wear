"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./splash.module.css";
export default function Splash(
  {
    loading,
    handleLoading,
  }: {
    loading: boolean;
    handleLoading: () => void;
  } // Add the type boolean to the loading prop
) {
  const percentageRef = useRef<HTMLDivElement>(null); // Add the type HTMLDivElement to the useRef function

  const progressBarRef = useRef<HTMLDivElement>(null); // Add the type HTMLDivElement to the useRef function

  const splashScreenRef = useRef<HTMLDivElement>(null); // Add the type HTMLDivElement to the useRef function

  const splashLeftRef = useRef<HTMLDivElement>(null); // Add the type HTMLDivElement to the useRef function

  const splashRightRef = useRef<HTMLDivElement>(null); // Add the type HTMLDivElement to the useRef function

  useEffect(() => {
    function setup() {
      setTimeout(() => {
        progressBarRef.current!.style.height = "40%";
      }, 500);
      setTimeout(() => {
        progressBarRef.current!.style.height = "80%";
      }, 1000);
      setTimeout(() => {
        progressBarRef.current!.style.height = "100%";
      }, 1500);
      setTimeout(() => {
        handleLoading();
      }, 3000);
    }

    function percentageTracker() {
      if (loading) {
        const top = (splashScreenRef.current ?? document.createElement("div")) // Use the nullish coalescing operator (??) to return a new div element if the splashScreenRef.current is null
          .getBoundingClientRect().top; // Use the non-null assertion operator (!) to access the getBoundingClientRect method
        (
          percentageRef.current ?? document.createElement("div")
        ).style.transform = `translateY(calc(${top - window.innerHeight}px)`;
        requestAnimationFrame(percentageTracker);
      }
    }
    setup();
    percentageTracker();
  });
  return (
    <body>
      <div
        className={
          loading ? styles.splashScreen : `${styles.splashScreen}.complete`
        }
        ref={splashScreenRef}
      >
        <div
          className={loading ? styles.left : `${styles.left}.active`}
          ref={splashLeftRef}
        ></div>
        <div
          className={loading ? styles.right : `${styles.right}.active`}
          ref={splashRightRef}
        ></div>
        <div
          className={
            loading ? styles.progressBar : `${styles.progressBar}.complete`
          }
          ref={progressBarRef}
        >
          <div className={styles.percentage} ref={percentageRef}></div>
        </div>
      </div>
    </body>
  );
}
