import Image from "next/image";
import Item from "../item/model";
import styles from "./LazySosan.module.css";

export default function LazySosan({ items }: { items: Item[] }) {
  const dublicatedItems = [...items, ...items];

  if (items.length === 0) {
    return <div className={styles.container}></div>;
  }
  return (
    <div className={styles.container}>
      {dublicatedItems.map((item, index) => (
        <Image
          key={index}
          src={item.images[0]}
          alt={item.name}
          className={styles.image}
          width={432}
          height={649}
          priority
        />
      ))}

      <h3 className={styles.actionButton}>Inspired by L.A street wear</h3>
    </div>
  );
}
