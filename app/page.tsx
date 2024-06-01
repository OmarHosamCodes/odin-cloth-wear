"use client";

import ItemsDisplay from "./item/components/ItemsDisplay";
import PersistentDrawerLeft from "./components/Drawer";
import ContactInfo from "./components/ContactInfo";
import { cache, useEffect, useState } from "react";
import LazySosan from "./components/LazySosan";
import Splash from "./components/splash";
import Item from "./item/model";
import ItemRepository from "./item/repository";
import dynamic from "next/dynamic";

const itemsFetch = cache(async () => {
  try {
    let response: Item[] = (await ItemRepository.instants.get()) as Item[];
    return response;
  } catch (error) {
    return [];
  }
});
function Home() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    itemsFetch().then((items) => {
      setItems(items);
    });
  }, []);

  return (
    <>
      <Splash />
      <PersistentDrawerLeft />
      <LazySosan items={items} />
      <ItemsDisplay items={items} isSwipable={true} />
      <ContactInfo />
    </>
  );
}

const NoSSRHome = dynamic(() => Promise.resolve(Home), {
  ssr: false,
});

export default NoSSRHome;
