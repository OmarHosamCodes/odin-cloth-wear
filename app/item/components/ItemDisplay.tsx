"use client";
import Item from "../model";
import styles from "./ItemDisplay.module.css";
import ImageViewer from "./ImageViewer";
import Divider from "../../components/Divider";
import { useRouter } from "next/navigation";
type ItemDisplayProps = {
  item: Item;
};

export default function ItemDisplay({ item }: ItemDisplayProps) {
  const router = useRouter();
  return (
    <div
      className={styles.container}
      onClick={() => {
        router.push(`/item/${item.id}`);
      }}
    >
      <ImageViewer item={item} />
      <div className={styles.nameAndPriceContainer}>
        <h4>{item.name}</h4>
        <Divider width={10} height={1} thickness={2} color="#f7f7f7" />
        <h4>{item.price}</h4>
      </div>
    </div>
  );
}
