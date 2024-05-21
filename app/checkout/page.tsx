"use client";

import { useEffect, useRef, useState } from "react";
import CartRepository from "../cart/repository";
import CheckoutItems from "./components/CheckoutItems";
import styles from "./page.module.css";
import CartItemModel from "../cart/model";
import { useRouter } from "next/navigation";
import { Divider } from "@mui/material";
import CheckoutRepository from "./repository";
import Mail from "./model";

export default function Checkout() {
  const router = useRouter();
  const [checkoutItems, setCheckoutItems] = useState<CartItemModel[]>([]);
  const formRef = useRef<HTMLFormElement>(null);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [deliveryCost, setDeliveryCost] = useState(0);

  useEffect(() => {
    setCheckoutItems(CartRepository.getCartItems());
  }, []);

  useEffect(() => {
    setDeliveryCost(Mail.getDeliveryCost(city));
  }, [city]);

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
          if (event.target.value === "none") {
            event.target.setCustomValidity("Please select a governorate");
          } else {
            event.target.setCustomValidity("");
          }
        }}
      >
        <option value="none">City</option>
        <option value="Cairo">Cairo</option>
        <option value="Alexandria">Alexandria</option>
        <option value="Dakahlia">Dakahlia</option>
        <option value="Red Sea">Red Sea</option>
        <option value="Beheira">Beheira</option>
        <option value="Fayoum">Fayoum</option>
        <option value="Gharbiya">Gharbiya</option>
        <option value="Ismailia">Ismailia</option>
        <option value="Menofia">Menofia</option>
        <option value="Minya">Minya</option>
        <option value="Qaliubiya">Qaliubiya</option>
        <option value="New Valley">New Valley</option>
        <option value="Suez">Suez</option>
        <option value="Aswan">Aswan</option>
        <option value="Assiut">Assiut</option>
        <option value="Beni Suef">Beni Suef</option>
        <option value="Port Said">Port Said</option>
        <option value="Damietta">Damietta</option>
        <option value="Sharkia">Sharkia</option>
        <option value="South Sinai">South Sinai</option>
        <option value="Kafr Al sheikh">Kafr Al sheikh</option>
        <option value="Matrouh">Matrouh</option>
        <option value="Luxor">Luxor</option>
        <option value="Qena">Qena</option>
        <option value="North Sinai">North Sinai</option>
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
            <text>Delivery</text>
            <text>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "EGP",
              }).format(deliveryCost)}
            </text>
          </div>
          <div className={styles.total}>
            <text>Total</text>
            <text>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "EGP",
              }).format(Mail.getGrandTotal(checkoutItems, city))}
            </text>
          </div>
          <button
            className={styles.successButton}
            onClick={() => {
              CheckoutRepository.putOrder(
                address,
                city,
                name,
                phone,
                Mail.getGrandTotal(checkoutItems, city)
              );
              router.push("/");
            }}
          >
            Confirm
          </button>
        </div>
      )}
    </form>
  );
}
