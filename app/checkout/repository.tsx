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
import Mail from "./model";
import AssetsRepository from "../assets/repository";

export default class CheckoutRepository {
  firestore: Firestore = firestore;
  static collection = "mail";
  static mailCollection: CollectionReference = collection(
    firestore,
    CheckoutRepository.collection
  );
  static makeid(length) {
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
  static async putOrder(
    address: string,
    governorates: string,
    name: string,
    phone: string
  ) {
    let items = CartRepository.getCartItems();

    const mail = new Mail(
      address,
      this.makeid(16),
      governorates,
      this.makeid(8),
      items,
      name,
      phone,
      items.reduce((acc, item) => acc + item.total(), 0)
    );
    const mailDoc = doc(this.mailCollection, mail.docID);
    await setDoc(mailDoc, mail.toJson());
    await AssetsRepository.instants.incrementOrder();
    CartRepository.clearCart();
  }
}
