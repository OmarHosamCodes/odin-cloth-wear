"use client";

import Image from "next/image";
import Item from "../item/model";
import styles from "./LazySosan.module.css";
import { cache, useEffect, useRef, useState } from "react";
import ItemRepository from "../item/repository";
const itemsFetch = cache(async () => {
  try {
    let response: Item[] = (await ItemRepository.instants.getByCategory(
      "top"
    )) as Item[];
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
});
export default function LazySosan() {
  const [items, setItems] = useState<Item[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    itemsFetch().then((items) => {
      setItems(items);
    });
  }, []);

  if (items.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      {items.map((item, index) => (
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
    </div>
  );
}
