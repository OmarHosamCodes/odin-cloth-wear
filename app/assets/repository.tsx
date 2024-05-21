import { firestore } from "../config/firebase";
import {
  CollectionReference,
  Firestore,
  collection,
  doc,
  getDoc,
  DocumentData,
  DocumentReference,
  updateDoc,
} from "firebase/firestore";

class AssetsRepository {
  firestore: Firestore;
  constructor(firestore: Firestore) {
    this.firestore = firestore;
  }

  static collection = "admin";

  static document = "assets";

  static instants = new AssetsRepository(firestore);

  static assetsCollection: CollectionReference = collection(
    firestore,
    AssetsRepository.collection
  );

  static assetsDocument: DocumentReference<DocumentData, DocumentData> = doc(
    firestore,
    `${AssetsRepository.collection}/${AssetsRepository.document}`
  );

  async getOrder(): Promise<number> {
    const docSnap = await getDoc(AssetsRepository.assetsDocument);
    if (docSnap.exists()) {
      return docSnap.data().order;
    } else {
      return 0;
    }
  }

  async incrementOrder() {
    const order = await this.getOrder();

    await updateDoc(AssetsRepository.assetsDocument, {
      order: order + 1,
    });
  }

  async getCategories(): Promise<Category[]> {
    const docSnap = await getDoc(AssetsRepository.assetsDocument);
    if (docSnap.exists()) {
      return docSnap.data().categories.map((category: any) => {
        return new Category(category.name, category.subCategories);
      });
    } else {
      return [];
    }
  }
}

export class Category {
  name: string;
  subCategories: string[];

  constructor(name: string, subCategories: string[]) {
    this.name = name;
    this.subCategories = subCategories;
  }

  fromJson(json: any): Category {
    return new Category(json.name, json.subCategories);
  }
}

export default AssetsRepository;
