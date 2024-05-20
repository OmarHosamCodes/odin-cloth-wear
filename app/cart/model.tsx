export default class CartItemModel {
  id: string;
  image: string;
  color: string;
  size: string;
  price: number;
  name: string;
  quantity: number;

  constructor(
    id: string,
    image: string,
    color: string,
    size: string,
    price: number,
    name: string,
    quantity: number = 1
  ) {
    this.id = id;
    this.image = image;
    this.color = color;
    this.size = size;
    this.price = price;
    this.name = name;
    this.quantity = quantity;
  }

  toJson(): any {
    return {
      id: this.id,
      image: this.image,
      color: this.color,
      size: this.size,
      price: this.price,
      name: this.name,
      quantity: this.quantity,
    };
  }

  static fromJson(json: any): CartItemModel {
    return new CartItemModel(
      json.id,
      json.image,
      json.color,
      json.size,
      json.price,
      json.name,
      json.quantity
    );
  }

  static cartItemsFromJson(json: any): CartItemModel[] {
    let cartItems: CartItemModel[] = [];
    json.map((item: any) => {
      cartItems.push(CartItemModel.fromJson(item));
    });
    return cartItems;
  }

  total(): number {
    return this.price * this.quantity;
  }

  static grandTotal(cartItems: CartItemModel[]): number {
    return cartItems.reduce((acc, item) => acc + item.total(), 0);
  }
}
