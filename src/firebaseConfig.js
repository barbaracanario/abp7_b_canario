// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdfuFbJALRQ2ByqXbd90aa6INokfQ0OP4",
  authDomain: "product-showcase-7b52a.firebaseapp.com",
  projectId: "product-showcase-7b52a",
  storageBucket: "product-showcase-7b52a.firebasestorage.app",
  messagingSenderId: "498555260227",
  appId: "1:498555260227:web:2ceaf12a3f7a781683f3f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)
export { db, auth }