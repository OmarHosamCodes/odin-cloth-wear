"use client";

import { useEffect, useRef, useState } from "react";
import CartRepository from "../cart/repository";
import CheckoutItems from "./components/CheckoutItems";
import styles from "./page.module.css";
import CartItemModel from "../cart/model";
import { useRouter } from "next/navigation";
import { Divider } from "@mui/material";
import CheckoutRepository from "./repository";

export default function Checkout() {
  const router = useRouter();
  const [checkoutItems, setCheckoutItems] = useState<CartItemModel[]>([]);
  const formRef = useRef<HTMLFormElement>(null);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    setCheckoutItems(CartRepository.getCartItems());
  }, []);

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
      <input
        type="text"
        placeholder="Name"
        required
        pattern="^[a-zA-Z\s]+$"
        onChange={(event) => {
          setName(event.target.value);
          if (event.target.validity.patternMismatch) {
            event.target.setCustomValidity("Please enter a valid name");
          } else {
            event.target.setCustomValidity("");
          }
        }}
      />
      <input
        type="tel"
        placeholder="Phone"
        required
        pattern="^[0][1-9]\d{9}$|^[1-9]\d{9}$"
        onChange={(event) => {
          setPhone(event.target.value);
          if (event.target.validity.patternMismatch) {
            event.target.setCustomValidity("Please enter a valid phone number");
          } else {
            event.target.setCustomValidity("");
          }
        }}
      />
      <input
        type="text"
        placeholder="Address"
        required
        pattern="^[a-zA-Z0-9_.-]*$"
        onChange={(event) => {
          setAddress(event.target.value);
          if (event.target.validity.patternMismatch) {
            event.target.setCustomValidity("Please enter a valid address");
          } else {
            event.target.setCustomValidity("");
          }
        }}
      />
      <select
        name="country"
        id="country"
        required
        onChange={(event) => {
          setCity(event.target.value);
          if (event.target.value === "1") {
            event.target.setCustomValidity("Please select a country");
          } else {
            event.target.setCustomValidity("");
          }
        }}
      >
        <option value="1">City</option>
        <option value="USA">USA</option>
        <option value="Canada">Canada</option>
      </select>
      <CheckoutItems items={checkoutItems} />

      <button
        className={styles.checkoutButton}
        type="submit"
        name="submit"
        onClick={(event) => {
          event.preventDefault();

          if (!formRef.current?.checkValidity()) {
            formRef.current?.reportValidity();
            return;
          }

          formRef.current.reset();
          setOpen(true);
        }}
      >
        Checkout
      </button>

      {open && (
        <div className={styles.modal}>
          <span className={styles.close} onClick={() => setOpen(false)}>
            &times;
          </span>
          {checkoutItems.map((item) => {
            return (
              <div key={item.id} className={styles.modalContent}>
                <text>{item.name}</text>
                <div className={styles.colorAndPrice}>
                  <text>{item.price}</text>
                  <div
                    className={styles.color}
                    style={{ backgroundColor: item.color }}
                  ></div>
                </div>
              </div>
            );
          })}
          <Divider
            style={{
              backgroundColor: "#f0f0f09d",
              height: ".5px",
              width: "100%",
              margin: "10px 0",
            }}
          />
          <div className={styles.total}>
            <text>Total</text>
            <text>{CartItemModel.grandTotal(checkoutItems)}</text>
          </div>
          <button
            className={styles.successButton}
            onClick={() => {
              CheckoutRepository.putOrder(name, phone, address, city);
              router.push("/");
            }}
          >
            Confirm And Go Home
          </button>
        </div>
      )}
    </form>
  );
}
