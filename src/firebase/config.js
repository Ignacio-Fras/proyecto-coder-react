// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJmRxj0m4anEJObUe57JU7Fn7WHi6pnTg",
  authDomain: "rj-pegasus-gaming.firebaseapp.com",
  projectId: "rj-pegasus-gaming",
  storageBucket: "rj-pegasus-gaming.appspot.com",
  messagingSenderId: "560067538741",
  appId: "1:560067538741:web:d33c5ea0c9be243ea6a67c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()