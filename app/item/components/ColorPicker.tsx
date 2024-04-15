"use client";

import { useState } from "react";
import Item from "../model";

import styles from "./ColorPicker.module.css";

export default function ColorPicker({ item }: { item: Item }) {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  let colors: string[] = item.colors.map((e) => convertColor(e));

  console.log(colors);
  return (
    <div className={styles.colorsContainer}>
      {colors.map((color, index) => (
        <div
          key={index}
          className={styles.colorContainer}
          style={{
            border:
              selectedColor === color
                ? `2px solid #${color}`
                : "2px solid transparent",
          }}
        >
          <button
            key={index}
            className={styles.color}
            style={{
              backgroundColor: `#${color}`,
            }}
            onClick={() => setSelectedColor(color)}
          ></button>
        </div>
      ))}
    </div>
  );
}

function convertColor(color: string): string {
  return color.substring(4);
}
