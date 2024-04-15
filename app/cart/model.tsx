class CartItem {
  id: string;
  color: number;
  size: string;
  price: number;
  name: string;
  quantity: number;

  constructor(
    id: string,
    color: number,
    size: string,
    price: number,
    name: string,
    quantity: number = 1
  ) {
    this.id = id;
    this.color = color;
    this.size = size;
    this.price = price;
    this.name = name;
    this.quantity = quantity;
  }

  toJson(): any {
    return {
      id: this.id,
      color: this.color,
      size: this.size,
      price: this.price,
      name: this.name,
      quantity: this.quantity,
    };
  }

  static fromJson(json: any): CartItem {
    return new CartItem(
      json.id,
      json.color,
      json.size,
      json.price,
      json.name,
      json.quantity
    );
  }
}
