import CartItem from "./CartItem";
import styles from "./CartItems.module.css";
export default function CartItems({
  cartItems,
}: {
  cartItems: CartItem[] | null;
}) {
  if (!cartItems) {
    return <h3 className={styles.cartEmpty}>Cart is empty</h3>;
  }

  return (
    <div>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
  );
}
