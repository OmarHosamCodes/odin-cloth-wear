"use client";
import React, { useEffect, useState } from "react";
import ItemRepository from "../repository";
import Item from "../model";
import ItemDisplay from "@/app/item/components/ItemDisplay";
import styles from "./ItemsDisplay.module.css";

function ItemsDisplay() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let response: Item[] = (await ItemRepository.instants.get()) as Item[];
        setItems(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className={styles.itemsGrid}>
      {items.map((item, index) => (
        <ItemDisplay key={index} item={item} />
      ))}
    </div>
  );
}

export default ItemsDisplay;
