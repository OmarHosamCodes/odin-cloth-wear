import { Assets } from "./model";
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
  DocumentData,
  DocumentReference,
  updateDoc,
  FieldValue,
} from "firebase/firestore";

class AssetsRepository {
  firestore: Firestore;
  constructor(firestore: Firestore) {
    this.firestore = firestore;
  }

  static collection = "admin";

  static documnet = "assets";

  static instants = new AssetsRepository(firestore);

  static assetsCollection: CollectionReference = collection(
    firestore,
    AssetsRepository.collection
  );

  static assetsDocument: DocumentReference<DocumentData, DocumentData> = doc(
    firestore,
    `${AssetsRepository.collection}/${AssetsRepository.documnet}`
  );

  async getAssets(): Promise<Assets> {
    const docSnap = await getDoc(AssetsRepository.assetsDocument);
    if (docSnap.exists()) {
      return Assets.fromJson(docSnap.data());
    } else {
      return Assets.empty();
    }
  }
  async putOrder(): Promise<void> {
    let assets = await this.getAssets();
    updateDoc(AssetsRepository.assetsDocument, {
      order: assets.order + 1,
    });
  }
}

export default AssetsRepository;
