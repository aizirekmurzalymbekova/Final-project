import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKv_FwoM2lJJq8cNK14zNX-fJZrzkGlAU",
  authDomain: "interior-auth.firebaseapp.com",
  projectId: "interior-auth",
  storageBucket: "interior-auth.appspot.com",
  messagingSenderId: "101154035909",
  appId: "1:101154035909:web:26686ddf88df65155a78ac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
