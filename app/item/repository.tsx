import Item from "./model";
import { firestore } from "../config/firebase";
import {
  CollectionReference,
  getDocs,
  Firestore,
  collection,
  doc,
  getDoc,
  query,
  orderBy,
  limit,
} from "firebase/firestore";

class ItemRepository {
  firestore: Firestore;
  constructor(firestore: Firestore) {
    this.firestore = firestore;
  }

  static collection = "items";

  static instants = new ItemRepository(firestore);

  static itemsCollection: CollectionReference = collection(
    firestore,
    ItemRepository.collection
  );

  async getById(itemId: string | null): Promise<Item | null> {
    const itemDoc = doc(firestore, `${ItemRepository.collection}/${itemId}`);
    const snapshot = await getDoc(itemDoc);
    if (!snapshot.exists()) {
      return null;
    }
    return Item.fromJson(snapshot.data());
  }

  async getByCategory(category: string, limitNumber?: number): Promise<Item[]> {
    const snapshot = await this.get();
    const items: Item[] = [];
    snapshot.forEach((item) => {
      items.push(Item.fromJson(item));
    });
    const filteredItems: Item[] = items.filter(
      (item) => item.category === category
    );
    return filteredItems;
  }

  async getByTag(tag: string): Promise<Item[]> {
    const snapshot = await this.get();
    const items: Item[] = [];
    snapshot.forEach((item) => {
      items.push(Item.fromJson(item));
    });
    const filteredItems: Item[] = items.filter((item) =>
      item.tags.includes(tag)
    );
    return filteredItems;
  }

  async getByName(name: string): Promise<Item[]> {
    const snapshot = await this.get();

    const items: Item[] = [];
    snapshot.forEach((item) => {
      items.push(Item.fromJson(item));
    });
    const filteredItems: Item[] = items.filter((item) =>
      item.name.includes(name)
    );
    const uniqueItems = Array.from(new Set(filteredItems));
    for (let i = 0; i < uniqueItems.length; i++) {
      console.log(uniqueItems[i].id);
    }
    return uniqueItems;
  }

  async get(): Promise<Item[]> {
    const itemsCollection = ItemRepository.itemsCollection;
    const snapshot = await getDocs(itemsCollection);
    console.log(snapshot);
    const items: Item[] = [];
    snapshot.forEach((doc) => {
      items.push(Item.fromJson(doc.data()));
    });
    return items;
  }
}

export default ItemRepository;
