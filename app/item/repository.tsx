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
    const itemsCollection = ItemRepository.itemsCollection;
    const q = query(
      itemsCollection,
      orderBy("category"),
      limit(limitNumber || 6)
    );
    const snapshot = await getDocs(q);
    const items: Item[] = [];
    snapshot.forEach((doc) => {
      items.push(Item.fromJson(doc.data()));
    });
    return items;
  }

  async getByTag(tag: string): Promise<Item[]> {
    const itemsCollection = ItemRepository.itemsCollection;
    const q = query(itemsCollection, orderBy("tags"), limit(6));
    const snapshot = await getDocs(q);
    const items: Item[] = [];
    snapshot.forEach((doc) => {
      items.push(Item.fromJson(doc.data()));
    });
    return items;
  }

  async getByName(name: string): Promise<Item[]> {
    const itemsCollection = ItemRepository.itemsCollection;
    const q = query(itemsCollection, orderBy("name"), limit(6));
    const snapshot = await getDocs(q);
    const items: Item[] = [];
    snapshot.forEach((doc) => {
      items.push(Item.fromJson(doc.data()));
    });
    return items;
  }

  async getByQuery(query: string): Promise<Item[]> {
    const searchQuery = new Set<Item>();
    const tagsQuery = await this.getByTag(query);
    const nameQuery = await this.getByName(query);
    const categoryQuery = await this.getByCategory(query, 100);

    tagsQuery.forEach((item) => searchQuery.add(item));
    nameQuery.forEach((item) => searchQuery.add(item));
    categoryQuery.forEach((item) => searchQuery.add(item));

    return Array.from(searchQuery);
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
