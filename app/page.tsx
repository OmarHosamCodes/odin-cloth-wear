"use client";

import ItemsDisplay from "./item/components/ItemsDisplay";
import PersistentDrawerLeft from "./components/Drawer";
import ContactInfo from "./components/ContactInfo";
import { cache, use, useEffect, useState } from "react";
import LazySosan from "./components/LazySosan";
import Splash from "./splash/splash";
import Item from "./item/model";
import ItemRepository from "./item/repository";
const itemsFetch = cache(async () => {
  try {
    let response: Item[] = (await ItemRepository.instants.get()) as Item[];
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
});
export default function Home() {
  const [loading, setLoading] = useState(true);
  const handleLoading = () => {
    setLoading(false);
  };

  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    itemsFetch().then((items) => {
      setItems(items);
    });
  }, []);

  if (loading) {
    return <Splash loading={loading} handleLoading={handleLoading} />;
  }

  return (
    <>
      <PersistentDrawerLeft />

      <main>
        <LazySosan />
        <ItemsDisplay items={items} />
        <ContactInfo />
      </main>
    </>
  );
}
