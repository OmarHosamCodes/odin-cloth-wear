import CartItemModel from "@/app/cart/model";
import CheckoutItem from "./CheckoutItem";
import styles from "./CheckoutItems.module.css";

export default function CheckoutItems({ items }: { items: CartItemModel[] }) {
  return (
    <div className={styles.checkoutItems}>
      {items.map((model) => (
        <CheckoutItem key={model.id} checkoutItem={model} />
      ))}
    </div>
  );
}
