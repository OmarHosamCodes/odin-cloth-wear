"use client";
import { toast, ToastContainer } from "react-toastify";
import styles from "./AddToCart.module.css";
import "react-toastify/dist/ReactToastify.css";
import Item from "../model";
import CartItem from "@/app/cart/model";
import CartRepository from "@/app/cart/repository";

export default function AddToCart({
  item,
  selectedColor,
  selectedSize,
}: {
  item: Item;
  selectedColor: string | null;
  selectedSize: string | null;
}) {
  const addToCart = () => {
    if (!selectedColor || !selectedSize) {
      return toast.error("Please select a color and size", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        toastId: "toastId",
      });
    } else {
      let itemToAdd = new CartItem(
        item.id,
        item.images[0],
        "#" + selectedColor!,
        selectedSize!,
        item.price,
        item.name
      ).toJson();
      CartRepository.saveCartItem(itemToAdd);
      return toast.success("Item Added !", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        toastId: "toastId",
      });
    }
  };

  return (
    <>
      <button className={styles.addToCart} onClick={addToCart}>
        Add to Cart
      </button>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}
