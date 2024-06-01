"use client";
import CartItemModel from "./model";

export default class CartRepository {
  //@ts-ignore
  private static _storage =
    typeof window !== "undefined" ? sessionStorage : null;
  public static get storage() {
    return CartRepository._storage;
  }
  static key = "cartItems";
  static getCartItems(): CartItemModel[] {
    let items;
    if (typeof window !== "undefined") {
      items = this.storage!.getItem(this.key);
    }
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
    if (typeof window !== "undefined") {
      this.storage!.setItem(this.key, JSON.stringify(items));
    }
  }

  static removeCartItem(id: string) {
    const items = this.getCartItems();
    const newItems = items.filter((item) => item.id !== id);
    if (typeof window !== "undefined") {
      this.storage!.setItem(this.key, JSON.stringify(newItems));
    }
  }

  static updateCartItem(id: string, quantity: number) {
    const items = this.getCartItems();
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, quantity };
      }
      return item;
    });
    if (typeof window !== "undefined") {
      this.storage!.setItem(this.key, JSON.stringify(newItems));
    }
  }

  static getCartItem(id: string): CartItemModel | undefined {
    const items = this.getCartItems();
    return items.find((item) => item.id === id);
  }

  static clearCart() {
    if (typeof window !== "undefined") {
      this.storage!.setItem(this.key, JSON.stringify([]));
    }
  }
}
