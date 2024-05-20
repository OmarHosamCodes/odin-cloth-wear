
import Item from "../model";

import styles from "./ColorPicker.module.css";

export default function ColorPicker({
  item,
  selectedColor,
  setSelectedColor,
}: {
  item: Item;
  selectedColor: string | null;
  setSelectedColor: (color: string) => void;
}) {
  let colors: string[] = item.colors.map((e) => convertColor(e));

 

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
