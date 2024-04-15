export default function CartItem({ cartItem }: { cartItem: CartItem }) {
  return (
    <div>
      <div>{cartItem!.name}</div>
      <div>{cartItem!.price}</div>
      <div>{cartItem!.quantity}</div>
    </div>
  );
}
