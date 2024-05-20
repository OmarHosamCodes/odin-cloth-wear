import Item from "./model";
import { firestore } from "../config/firebase";
import {
  CollectionReference,
  getDocs,
  Firestore,
  collection,
  doc,
  getDoc,
} from "firebase/firestore";
import { LocalKey, LocalStorage } from "ts-localstorage";

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
  private static _storage = LocalStorage;
  public static get storage() {
    return ItemRepository._storage;
  }
  static key = new LocalKey<string | null | undefined>("items", "");

  async getById(itemId: string | null): Promise<Item | null> {
    const itemDoc = doc(firestore, `${ItemRepository.collection}/${itemId}`);
    const snapshot = await getDoc(itemDoc);
    if (!snapshot.exists()) {
      return null;
    }
    return Item.fromJson(snapshot.data());
  }

  async getByCategory(category: string): Promise<Item[]> {
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

    return uniqueItems;
  }

  async get(): Promise<Item[]> {
    const itemsFromCache = ItemRepository.storage.getItem(ItemRepository.key);

    if (itemsFromCache) {
      return JSON.parse(itemsFromCache);
    } else {
      const snapshot = await getDocs(ItemRepository.itemsCollection);
      const itemsFromDB: Item[] = [];
      snapshot.forEach((doc) => {
        itemsFromDB.push(Item.fromJson(doc.data()));
      });

      ItemRepository.storage.setItem(
        ItemRepository.key,
        JSON.stringify(itemsFromDB)
      );
      return itemsFromDB;
    }
  }

  static async getItems(): Promise<Item[]> {
    return await this.instants.get();
  }

  private static _items: Item[] = [];
  public static get items(): Item[] {
    return ItemRepository._items;
  }
  public static set items(value: Item[]) {
    ItemRepository._items = value;
  }
}

export default ItemRepository;
