/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import PersistentDrawerLeft from "@/app/components/Drawer";
import ProgressBar from "@/app/components/ProgressBar";
import ItemsDisplay from "@/app/item/components/ItemsDisplay";
import Item from "@/app/item/model";
import ItemRepository from "@/app/item/repository";
import { Divider } from "@mui/material";
import { cache, useEffect, useState } from "react";

const itemsFetch = cache(async (query: string) => {
  try {
    let response: Item[] = (await ItemRepository.instants.getByName(
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
  const [items, setItems] = useState<Item[]>([]);
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

  if (items.length === 0) {
    return <ProgressBar />;
  }

  return (
    <>
      <PersistentDrawerLeft />
      <ItemsDisplay items={items} />
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

      <ItemsDisplay items={suggestedItems} isGrid={true} isAbstract={true} />
    </>
  );
}
