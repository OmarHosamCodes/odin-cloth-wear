import CartItemModel from "../model";
import styles from "./CartItems.module.css";
import CartItem from "./CartItem";

export default function CartItems({
  cartItems,
}: {
  cartItems: CartItemModel[];
}) {
  return (
    <div className={styles.cartItems}>
      {cartItems.map((model) => (
        <CartItem key={model.id} cartItem={model} />
      ))}
    </div>
  );
}
