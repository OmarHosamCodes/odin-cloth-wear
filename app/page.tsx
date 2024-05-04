import ItemsDisplay from "./item/components/ItemsDisplay";
import PersistentDrawerLeft from "./components/Drawer";
import ContactInfo from "./components/ContactInfo";
import Item from "./item/model";
import { cache } from "react";
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
  return (
    <>
      <PersistentDrawerLeft />

      <main>
        <ItemsDisplay />
        <ContactInfo />
      </main>
    </>
  );
}
