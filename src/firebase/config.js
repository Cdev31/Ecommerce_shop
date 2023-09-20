// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore/lite"
import { getStorage } from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyCywFaDKTE2AcH9ozrnjDWT3CKwZVZHBJA",
  authDomain: "ecommerce-5e984.firebaseapp.com",
  projectId: "ecommerce-5e984",
  storageBucket: "gs://ecommerce-5e984.appspot.com",
  messagingSenderId: "96697765771",
  appId: "1:96697765771:web:70aee6b15aae8bc7a6e98e"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig )
export const FirebaseAuth = getAuth( FirebaseApp )
export const FirebaseDB = getFirestore( FirebaseApp )
export const storage = getStorage( FirebaseApp )


