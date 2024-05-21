import CartRepository from "../cart/repository";
import { firestore } from "../config/firebase";
import {
  CollectionReference,
  Firestore,
  collection,
  addDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import Mail, { MailModel } from "./model";
import AssetsRepository from "../assets/repository";
import CartItemModel from "../cart/model";

export default class CheckoutRepository {
  firestore: Firestore = firestore;
  static collection = "mail";
  static mailCollection: CollectionReference = collection(
    firestore,
    CheckoutRepository.collection
  );
  static makeid(length: number) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }
  static makeNumberid(length: number) {
    let result = "";
    const characters = "0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }
  static async putOrder(
    address: string,
    governorates: string,
    name: string,
    phone: string,
    total: number
  ) {
    let items = CartRepository.getCartItems();

    const mail = {
      address: address,
      docID: this.makeid(21),
      governorates: governorates,
      id: this.makeNumberid(4),
      items: CartItemModel.toListJson(items),
      name: name,
      phone: phone,
      total: total,
    };

    const mailDoc = doc(this.mailCollection, mail.docID);
    await setDoc(mailDoc, mail);
    await AssetsRepository.instants.incrementOrder();
    CartRepository.clearCart();
  }
}
