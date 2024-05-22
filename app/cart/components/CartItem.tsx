"use cleint";
import Image from "next/image";
import CartItemModel from "../model";
import styles from "./CartItem.module.css";
import trashIcon from "../../../public/trash.svg";
import { useState } from "react";
import CartRepository from "../repository";
import { useRouter } from "next/navigation";

export default function CartItem({ cartItem }: { cartItem: CartItemModel }) {
  const [quantity, setQuantity] = useState<number>(cartItem.quantity);
  const [visible, setVisible] = useState<boolean>(true);

  const router = useRouter();
  const increment = () => {
    setQuantity(quantity + 1);

    CartRepository.updateCartItem(cartItem.id, quantity + 1);
  };

  const decrement = () => {
    if (quantity !== 1) {
      setQuantity(quantity - 1);
      CartRepository.updateCartItem(cartItem.id, quantity - 1);
    }
  };

  const removeItem = () => {
    setVisible(false);
    CartRepository.removeCartItem(cartItem.id);
    if (CartRepository.getCartItems().length === 0) {
      window.location.reload();
    }
  };

  if (!visible) {
    return null;
  }
  return (
    <div className={styles.container}>
      <div className={styles.imageDetails}>
        <Image
          src={cartItem.image}
          alt={cartItem.name}
          width={50}
          height={50}
          className={styles.image}
        />
        <div className={styles.nameColorPrice}>
          <text className={styles.name}>{cartItem!.name}</text>
          <div
            className={styles.color}
            style={{
              backgroundColor: cartItem!.color,
            }}
          />
          <text className={styles.price}>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "EGP",
            }).format(cartItem!.price * quantity)}
          </text>
        </div>
      </div>

      <div className={styles.quantityAndCrements}>
        <button className={styles.increment} onClick={() => increment()}>
          +
        </button>
        <text className={styles.quantity}>{quantity}</text>
        <button className={styles.decrement} onClick={() => decrement()}>
          -
        </button>
        <Image
          src={trashIcon}
          alt="trash"
          width={0}
          height={0}
          className={styles.trash}
          onClick={() => removeItem()}
        />
      </div>
    </div>
  );
}
