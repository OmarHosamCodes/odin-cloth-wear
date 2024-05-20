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
}

export default AssetsRepository;
