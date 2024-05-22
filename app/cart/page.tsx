"use client";

import { useState, useEffect } from "react";
import CartItems from "./components/CartItems";
import Checkout from "./components/Checkout";
import styles from "./page.module.css";
import PersistentDrawerLeft from "../components/Drawer";
import CartRepository from "./repository";
import CartItemModel from "./model";
import { useRouter } from "next/navigation";

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItemModel[]>([]);
  const router = useRouter();
  useEffect(() => {
    setCartItems(CartRepository.getCartItems());
  }, []);

  return (
    <>
      <PersistentDrawerLeft />

      {cartItems.length === 0 ? (
        <main className={styles.main}>
          <h3 className={styles.cartEmpty}>Cart is empty</h3>
          <button
            className={styles.continueShoppingButton}
            onClick={() => router.push("/")}
          >
            Continue Shopping
          </button>
        </main>
      ) : (
        <main className={styles.main}>
          <CartItems cartItems={cartItems} />
          <Checkout cartItems={cartItems} />
        </main>
      )}
    </>
  );
}
