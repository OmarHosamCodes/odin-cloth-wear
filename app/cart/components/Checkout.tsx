import { useRouter } from "next/navigation";
import CartItemModel from "../model";
import styles from "./Checkout.module.css";

export default function Checkout({
  cartItems,
}: {
  cartItems: CartItemModel[];
}) {
  const router = useRouter();

  if (cartItems.length == 0) {
    return (
      <button
        className={styles.continueShoppingButton}
        onClick={() => router.push("/")}
      >
        Continue Shopping
      </button>
    );
  }
  return (
    <button
      className={styles.checkoutButton}
      onClick={() => router.push("/checkout")}
    >
      Checkout
    </button>
  );
}
