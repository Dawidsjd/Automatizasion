import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB-cPKmXA8YGdbqVzmRYgeCYqak5Ws5XV4",
  authDomain: "react-login-d0d4e.firebaseapp.com",
  projectId: "react-login-d0d4e",
  storageBucket: "react-login-d0d4e.appspot.com",
  messagingSenderId: "212808355349",
  appId: "1:212808355349:web:060a502c6598841083c81c",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
