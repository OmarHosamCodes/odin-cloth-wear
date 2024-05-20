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
  static async putOrder(
    address: string,
    governorates: string,
    name: string,
    phone: string
  ) {
    let items = CartRepository.getCartItems();

    const mail = new Mail(
      address,
      Math.random().toString(36).substring(7),
      governorates,
      ((await AssetsRepository.instants.getOrder()) + 1).toString(),
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
