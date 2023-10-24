// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-cPKmXA8YGdbqVzmRYgeCYqak5Ws5XV4",
  authDomain: "react-login-d0d4e.firebaseapp.com",
  projectId: "react-login-d0d4e",
  storageBucket: "react-login-d0d4e.appspot.com",
  messagingSenderId: "212808355349",
  appId: "1:212808355349:web:060a502c6598841083c81c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);