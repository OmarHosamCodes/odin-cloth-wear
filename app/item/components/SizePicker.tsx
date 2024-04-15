"use client";
import { useState } from "react";
import Item from "../model";

import styles from "./SizePicker.module.css";

export default function SizePicker({ item }: { item: Item }) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  let sizes: string[] = item.sizes;

  console.log(sizes);
  return (
    <div className={styles.sizesContainer}>
      {sizes.map((size, index) => {
        const isSelected = selectedSize === size;

        return (
          <button
            key={index}
            className={styles.size}
            style={{
              backgroundColor: isSelected ? "#0f0f0f" : "transparent",
              color: isSelected ? "#f7f7f7" : "#0f0f0f",
              border: isSelected ? "3px solid #0f0f0f" : "3px solid #f7f7f7",
            }}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        );
      })}
    </div>
  );
}
