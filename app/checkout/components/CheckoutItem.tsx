import CartItemModel from "@/app/cart/model";
import styles from "./CheckoutItem.module.css";
import Image from "next/image";
export default function CheckoutItem({
  checkoutItem,
}: {
  checkoutItem: CartItemModel;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.imageDetails}>
        <Image
          src={checkoutItem.image}
          alt={checkoutItem.name}
          width={50}
          height={50}
          className={styles.image}
        />
        <div className={styles.nameColorPrice}>
          <h6 className={styles.name}>{checkoutItem.name}</h6>
          <div
            className={styles.color}
            style={{
              backgroundColor: checkoutItem.color,
            }}
          />
          <h6 className={styles.price}>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "EGP",
            }).format(checkoutItem.price * checkoutItem.quantity)}
          </h6>
          <h6 className={styles.quantity}>Quantity: {checkoutItem.quantity}</h6>
        </div>
      </div>
    </div>
  );
}
