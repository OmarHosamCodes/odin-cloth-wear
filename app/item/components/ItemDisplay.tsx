import Item from "../model";
import styles from "./ItemDisplay.module.css";
import ImageViewer from "./ImageViewer";
import Divider from "../../components/Divider";
type ItemDisplayProps = {
  item: Item;
  isGrid?: boolean;
  isAbstract?: boolean;
};

export default function ItemDisplay({
  item,
  isGrid,
  isAbstract,
}: ItemDisplayProps) {
  return (
    <div className={isGrid ? styles.containerGrid : styles.container}>
      <ImageViewer item={item} id={item.id} />

      <Details item={item} isGrid={isGrid} isAbstract={isAbstract} />
    </div>
  );
}

function Details({ item, isGrid, isAbstract }: ItemDisplayProps) {
  if (isAbstract) {
    return <></>;
  }

  return (
    <div
      className={
        isGrid ? styles.nameAndPriceContainerGrid : styles.nameAndPriceContainer
      }
    >
      <h4>{item.name}</h4>
      <Divider width={10} height={1} thickness={2} color="#f7f7f7" />
      <h4>{item.price}</h4>
    </div>
  );
}
