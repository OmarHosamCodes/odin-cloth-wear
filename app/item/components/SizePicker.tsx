import Item, { sizes as sizesType } from "../model";

import styles from "./SizePicker.module.css";

export default function SizePicker({
  item,
  selectedSize,
  setSelectedSize,
}: {
  item: Item;
  selectedSize: string | null;
  setSelectedSize: (size: string) => void;
}) {
  let sizes: sizesType[] = item.sizes;

  return (
    <div className={styles.sizesContainer}>
      {sizes.map((size, index) => {
        const isSelected = selectedSize === size.size;

        if (size.isInStock) {
          return (
            <button
              key={index}
              className={styles.size}
              style={{
                borderRadius: "5px",
                backgroundColor: isSelected ? "#0f0f0f" : "transparent",
                color: "#f7f7f7",
                border: isSelected ? "3px solid #0f0f0f" : "3px solid #f7f7f7",
              }}
              onClick={() => setSelectedSize(size.size)}
            >
              {size.size}
            </button>
          );
        }
        return <></>;
      })}
    </div>
  );
}
