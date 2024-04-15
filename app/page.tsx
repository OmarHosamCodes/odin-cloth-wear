"use client";

import { useState } from "react";
import Appbar from "./components/AppBar";
import ItemsDisplay from "./item/components/ItemsDisplay";
export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      <Appbar onClick={toggleDrawer} />
      <ItemsDisplay />
    </>
  );
}
