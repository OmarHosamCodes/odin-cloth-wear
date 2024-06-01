/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import PersistentDrawerLeft from "@/app/components/Drawer";
import ProgressBar from "@/app/components/ProgressBar";
import ItemsDisplay from "@/app/item/components/ItemsDisplay";
import Item from "@/app/item/model";
import ItemRepository from "@/app/item/repository";
import { Divider } from "@mui/material";
import { cache, useEffect, useState } from "react";
import styles from "./page.module.css";
const itemsFetch = cache(async (query: string) => {
  try {
    let response: Item[] = (await ItemRepository.instants.getByQuery(
      query
    )) as Item[];
    return response;
  } catch (error) {
    return [];
  }
});

const suggestedItemsFetch = cache(async () => {
  try {
    let response: Item[] = (await ItemRepository.instants.getByTag(
      "hot"
    )) as Item[];
    return response;
  } catch (error) {
    return [];
  }
});

export default function Search({ params }: { params: { query: string } }) {
  const [items, setItems] = useState<Item[] | null>(null);
  const [suggestedItems, setSuggestedItems] = useState<Item[]>([]);
  useEffect(() => {
    const query = decodeURI(params.query);
    itemsFetch(query).then((items) => {
      setItems(items);
    });
    suggestedItemsFetch().then((items) => {
      setSuggestedItems(items);
    });
  }, []);

  if (!items) {
    return <ProgressBar />;
  } else if (items.length === 0) {
    return (
      <>
        <PersistentDrawerLeft />
        <h1 style={{}} className={styles.sorry}>
          Sorry, no items found for {decodeURI(params.query)}
        </h1>
        <>
          <h1>Hot Now</h1>
          <Divider
            style={{
              width: "100%",
              height: 5,
              background: "#0f0f0f",
            }}
          />
        </>

        <ItemsDisplay
          items={suggestedItems}
          isGrid={true}
          isAbstract={true}
          isSwipable={false}
        />
      </>
    );
  }

  return (
    <>
      <PersistentDrawerLeft />
      <ItemsDisplay items={items} isSwipable={true} />
      <>
        <h1>Hot Now</h1>
        <Divider
          style={{
            width: "100%",
            height: 5,
            background: "#0f0f0f",
          }}
        />
      </>

      <ItemsDisplay
        items={suggestedItems}
        isGrid={true}
        isAbstract={true}
        isSwipable={false}
      />
    </>
  );
}
