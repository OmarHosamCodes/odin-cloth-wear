import CartItemModel from "../cart/model";

export interface MailModel {
  address: string;
  docID: string;
  governorates: string;
  id: string;
  items: CartItemModel[];
  name: string;
  phone: string;
  total: number;
}

export default class Mail implements MailModel {
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

  static getDeliveryCost(name: string): number {
    switch (name) {
      case "Cairo":
        return 45;
      case "Alexandria":
        return 45;
      case "Dakahlia":
        return 45;
      case "Red Sea":
        return 110;
      case "Beheira":
        return 60;
      case "Fayoum":
        return 75;
      case "Gharbiya":
        return 55;
      case "Ismailia":
        return 45;
      case "Menofia":
        return 55;
      case "Minya":
        return 85;
      case "Qaliubiya":
        return 55;
      case "New Valley":
        return 215;
      case "Suez":
        return 45;
      case "Aswan":
        return 110;
      case "Assiut":
        return 85;
      case "Beni Suef":
        return 80;
      case "Port Said":
        return 45;
      case "Damietta":
        return 45;
      case "Sharkia":
        return 55;
      case "South Sinai":
        return 135;
      case "Kafr Al sheikh":
        return 60;
      case "Matrouh":
        return 135;
      case "Luxor":
        return 110;
      case "Qena":
        return 110;
      case "North Sinai":
        return 45;
      default:
        return 0;
    }
  }

  static getGrandTotal(items: CartItemModel[], governorate: string): number {
    const grandTotal =
      items.reduce((acc, item) => acc + item.total(), 0) +
      Mail.getDeliveryCost(governorate);
    return Math.round(grandTotal * 100) / 100;
  }
}
