"use client";
import ImageViewer from "../components/ImageViewer";
import ItemRepository from "../repository";
import ColorPicker from "../components/ColorPicker";
import SizePicker from "../components/SizePicker";
import AddToCart from "../components/AddToCart";
import Description from "../components/Desctiption";
import Sizing from "../components/Sizing";
import { cache, useEffect, useState } from "react";
import styles from "./page.module.css";
import ItemModel from "../model";
import PersistentDrawerLeft from "@/app/components/Drawer";
const itemFetch = cache(async (id: string) => {
  try {
    let response: ItemModel = (await ItemRepository.instants.getById(
      id
    )) as ItemModel;
    return response;
  } catch (error) {
    return null;
  }
});
export default function Item({ params }: { params: { id: string } }) {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [item, setItem] = useState<ItemModel | null>();

  useEffect(() => {
    itemFetch(params.id).then((item) => {
      setItem(item);
    });
  }, [params.id]);
  if (!item) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <PersistentDrawerLeft />
      <div className={styles.content}>
        <ImageViewer item={item!} id={params.id} disableNavigation={true} />
        <div className={styles.details}>
          <h1>{item?.name}</h1>
          <p>{item?.category}</p>
          <p>{item?.price}</p>
          <div className={styles.pickers}>
            <ColorPicker
              item={item!}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />
            <SizePicker
              item={item!}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />
          </div>

          <AddToCart
            item={item!}
            selectedColor={selectedColor}
            selectedSize={selectedSize}
          />
          <Description item={item!} />
          <Sizing item={item!} />
        </div>
      </div>
    </>
  );
}
