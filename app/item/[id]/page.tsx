"use client";

import Appbar from "../../components/AppBar";
import ImageViewer from "../components/ImageViewer";
import ItemRepository from "../repository";
import ColorPicker from "../components/ColorPicker";
import SizePicker from "../components/SizePicker";
import AddToCart from "../components/AddToCart";
import Description from "../components/Desctiption";
import Sizing from "../components/Sizing";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import ItemModel from "../model";

export default function Item({ params }: { params: { id: string } }) {
  const [item, setItem] = useState<ItemModel>(ItemModel.empty());

  useEffect(() => {
    async function fetchData() {
      try {
        let response: ItemModel = (await ItemRepository.instants.getById(
          params.id
        )) as ItemModel;
        setItem(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [params.id]);
  if (!item) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Appbar
        onClick={() => {
          console.log("Appbar clicked");
        }}
      ></Appbar>
      <main>
        <ImageViewer item={item!} />

        <div className={styles.details}>
          <h1>{item?.name}</h1>
          {/* <p>{item.description}</p> */}
          <p>{item?.category}</p>
          <p>{item?.price}</p>
          <ColorPicker item={item!} />
          <SizePicker item={item!} />
          <AddToCart />
          <Description item={item!} />
          <Sizing item={item!} />
        </div>
      </main>
    </>
  );
}
