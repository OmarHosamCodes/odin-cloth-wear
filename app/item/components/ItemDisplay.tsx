import Item, { sizes } from "../model";
import styles from "./ItemDisplay.module.css";
import ImageViewer from "./ImageViewer";
import { Divider } from "@mui/material";
type ItemDisplayProps = {
  item: Item;
  isGrid?: boolean;
  isAbstract?: boolean;
  isSwipable?: boolean;
};

export default function ItemDisplay({
  item,
  isGrid,
  isAbstract,
  isSwipable,
}: ItemDisplayProps) {
  return (
    <div className={isGrid ? styles.containerGrid : styles.container}>
      <ImageViewer item={item} id={item.id} isSwipable={isSwipable} />

      {!isAbstract && <Details item={item} isGrid={isGrid} />}
    </div>
  );
}

function Details({ item, isGrid }: ItemDisplayProps) {
  function isAllSizesInStock(sizes: sizes[]) {
    let allSizesInStock: Boolean[] = [];
    sizes.forEach((size) => {
      allSizesInStock.push(size.isInStock);
    });
    if (allSizesInStock.includes(true)) {
      return true;
    } else {
      return false;
    }
  }

  if (isAllSizesInStock(item.sizes)) {
    return (
      <div
        className={
          isGrid
            ? styles.nameAndPriceContainerGrid
            : styles.nameAndPriceContainer
        }
      >
        <h4>{item.name}</h4>
        <Divider
          style={{
            width: 10,
            height: 1,
            background: "#f7f7f7",
          }}
        />
        <h4>{item.price}</h4>
      </div>
    );
  }

  return (
    <div
      className={
        isGrid ? styles.nameAndPriceContainerGrid : styles.nameAndPriceContainer
      }
    >
      <h4>{item.name}</h4>
      <Divider
        style={{
          width: 10,
          height: 1,
          background: "#f7f7f7",
        }}
      />
      <h4
        style={{
          color: "red",
          textDecoration: "line-through",
        }}
      >
        Out Of Stock
      </h4>
    </div>
  );
}
