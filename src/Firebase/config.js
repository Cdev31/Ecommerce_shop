import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCywFaDKTE2AcH9ozrnjDWT3CKwZVZHBJA",
  authDomain: "ecommerce-5e984.firebaseapp.com",
  projectId: "ecommerce-5e984",
  storageBucket: "ecommerce-5e984.appspot.com",
  messagingSenderId: "96697765771",
  appId: "1:96697765771:web:70aee6b15aae8bc7a6e98e"
};


export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp)
export const FirebaseDB = getFirestore( FirebaseApp )