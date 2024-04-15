import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY as string,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN as string,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as string,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET as string,
  messagingSenderId: process.env
    .NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID as string,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID as string,
};
// const firebaseConfig = {
//   apiKey: "AIzaSyCM7zudL2bFq6uGU-voN0yDuo13pOVFbdE",
//   authDomain: "odin-cloth-wear-sever-dev.firebaseapp.com",
//   projectId: "odin-cloth-wear-sever-dev",
//   storageBucket: "odin-cloth-wear-sever-dev.appspot.com",
//   messagingSenderId: "630129936048",
//   appId: "1:630129936048:web:dbe7788490a8a59e1e1d75",
// };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
