import CartItemModel from "./model";

export default class CartRepository {
  private static _storage: Storage =
    typeof localStorage !== "undefined" ? localStorage : sessionStorage;
  public static get storage(): Storage {
    return CartRepository._storage;
  }

  static getCartItems(): CartItemModel[] {
    const items = this.storage.getItem("cartItems");
    if (items) {
      return CartItemModel.cartItemsFromJson(JSON.parse(items));
    }
    return [];
  }

  static saveCartItem(item: CartItemModel) {
    const items = this.getCartItems();
    if (items.find((i) => i.id === item.id)) {
      return;
    }

    items.push(item);
    this.storage.setItem("cartItems", JSON.stringify(items));
  }

  static removeCartItem(id: string) {
    const items = this.getCartItems();
    const newItems = items.filter((item) => item.id !== id);
    this.storage.setItem("cartItems", JSON.stringify(newItems));
  }

  static updateCartItem(id: string, quantity: number) {
    const items = this.getCartItems();
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, quantity };
      }
      return item;
    });
    this.storage.setItem("cartItems", JSON.stringify(newItems));
  }

  static getCartItem(id: string): CartItemModel | undefined {
    const items = this.getCartItems();
    return items.find((item) => item.id === id);
  }
}
