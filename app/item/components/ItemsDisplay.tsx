"use client";
import React, { useEffect, useState } from "react";
import Item from "../model";
import ItemDisplay from "@/app/item/components/ItemDisplay";
import styles from "./ItemsDisplay.module.css";
import { itemsFetch } from "@/app/page";

export default function ItemsDisplay() {
  const [items, setItems] = React.useState<Item[]>([]);

  React.useEffect(() => {
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
