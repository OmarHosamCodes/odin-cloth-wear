"use client";
import React, { cache, useEffect, useState } from "react";
import Item from "../model";
import ItemDisplay from "@/app/item/components/ItemDisplay";
import styles from "./ItemsDisplay.module.css";
import ItemRepository from "../repository";
const itemsFetch = cache(async () => {
  try {
    let response: Item[] = (await ItemRepository.instants.get()) as Item[];
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
});

export default function ItemsDisplay() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    itemsFetch().then((items) => {
      setItems(items);
    });
  }, []);
  return (
    <div className={styles.itemsGrid}>
      {items.map((item, index) => (
        <ItemDisplay key={index} item={item} />
      ))}
    </div>
  );
}
