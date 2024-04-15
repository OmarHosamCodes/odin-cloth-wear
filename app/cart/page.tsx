"use client";
import React from "react";
import Appbar from "../components/AppBar";
import CartItem from "./components/CartItem";
import CartItems from "./components/CartItems";
import Checkout from "./components/Checkout";

import styles from "./page.module.css";
export default function Cart() {
  return (
    <>
      <Appbar
        onClick={() => {
          console.log("Appbar clicked");
        }}
      ></Appbar>

      <main className={styles.main}>
        <CartItems cartItems={null} />

        <Checkout />
      </main>
    </>
  );
}
