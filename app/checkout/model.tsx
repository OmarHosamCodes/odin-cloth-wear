import CartItemModel from "../cart/model";

export default class Mail {
  address: string;
  docID: string;
  governorates: string;
  id: string;
  items: CartItemModel[];
  name: string;
  phone: string;
  total: number;

  constructor(
    address: string,
    docID: string,
    governorates: string,
    id: string,
    items: CartItemModel[],
    name: string,
    phone: string,
    total: number
  ) {
    this.address = address;
    this.docID = docID;
    this.governorates = governorates;
    this.id = id;
    this.items = items;
    this.name = name;
    this.phone = phone;
    this.total = total;
  }

  toJson(): any {
    return {
      address: this.address,
      docID: this.docID,
      governorates: this.governorates,
      id: this.id,
      items: this.items.map((item) => item.toJson()),
      name: this.name,
      phone: this.phone,
      total: this.total,
    };
  }

  copyWith({
    address,
    docID,
    governorates,
    id,
    items,
    name,
    phone,
    total,
  }: {
    address?: string;
    docID?: string;
    governorates?: string;
    id?: string;
    items?: CartItemModel[];
    name?: string;
    phone?: string;
    total?: number;
  }): Mail {
    return new Mail(
      address ?? this.address,
      docID ?? this.docID,
      governorates ?? this.governorates,
      id ?? this.id,
      items ?? this.items,
      name ?? this.name,
      phone ?? this.phone,
      total ?? this.total
    );
  }
}
