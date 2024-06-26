import Item from "../model";
import ItemDisplay from "@/app/item/components/ItemDisplay";
import styles from "./ItemsDisplay.module.css";

export default function ItemsDisplay({
  items,
  isGrid,
  isAbstract,
  isSwipable,
}: {
  items: Item[];
  isGrid?: boolean;
  isAbstract?: boolean;
  isSwipable: boolean;
}) {
  return (
    <div className={isGrid ? styles.itemsGrid : styles.itemsList}>
      {items.map((item, index) => (
        <ItemDisplay
          key={index}
          item={item}
          isGrid={isGrid}
          isAbstract={isAbstract}
          isSwipable={isSwipable}
        />
      ))}
    </div>
  );
}
