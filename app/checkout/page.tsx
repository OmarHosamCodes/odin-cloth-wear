"use client";

import { useEffect, useRef, useState } from "react";
import CartRepository from "../cart/repository";
import CheckoutItems from "./components/CheckoutItems";
import styles from "./page.module.css";
import CartItemModel from "../cart/model";
import { useRouter } from "next/navigation";

export default function Checkout() {
  const router = useRouter();
  const [checkoutItems, setCheckoutItems] = useState<CartItemModel[]>([]);

  useEffect(() => {
    setCheckoutItems(CartRepository.getCartItems());
  }, []);

  const formRef = useRef<HTMLFormElement>(null);
  const [open, setOpen] = useState(false);

  if (checkoutItems.length === 0) {
    return (
      <div className={styles.errorLayout}>
        <text className={styles.errorText}>No Items To Checkout!</text>

        <button className={styles.errorButton}>Go Home</button>
      </div>
    );
  }

  return (
    <form className={styles.form} ref={formRef}>
      <input type="text" placeholder="Name" required />
      <input type="tel" placeholder="Phone" required />
      <input type="text" placeholder="Address" required />
      <select>
        <option value="1">City</option>
        <option value="2">USA</option>
        <option value="3">Canada</option>
      </select>
      <input type="text" placeholder="Coupon" required />
      <CheckoutItems items={checkoutItems} />

      <button
        className={styles.checkoutButton}
        type="submit"
        onClick={() => {
          // setOpen(true);

          alert(!formRef.current!.checkValidity().toString());
        }}
      >
        Checkout
      </button>

      {open && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={() => setOpen(false)}>
              &times;
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
              perspiciatis sapiente pariatur iure, odio placeat cumque
              aspernatur totam. Veniam quaerat reiciendis soluta voluptas fuga
              quo magni nemo nulla temporibus quod!
            </p>
          </div>
        </div>
      )}
    </form>
  );
}
