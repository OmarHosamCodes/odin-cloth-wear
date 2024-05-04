"use client";

import React, { createContext, useContext, useEffect } from "react";
import CartItems from "./components/CartItems";
import Checkout from "./components/Checkout";
import styles from "./page.module.css";
import PersistentDrawerLeft from "../components/Drawer";
import CartRepository from "./repository";
import CartItemModel from "./model";

export default function Cart() {
  const [cartItems, setCartItems] = React.useState<CartItemModel[]>([]);

  useEffect(() => {
    setCartItems(CartRepository.getCartItems());
  }, []);

  return (
    <>
      <PersistentDrawerLeft />
      <main className={styles.main}>
        <CartItems cartItems={cartItems} />
        <Checkout cartItems={cartItems} />
      </main>
    </>
  );
}
