// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3kW9rig_Dce5H0wizOMTgzxYRSUKfwjs",
  authDomain: "lore-shop.firebaseapp.com",
  projectId: "lore-shop",
  storageBucket: "lore-shop.appspot.com",
  messagingSenderId: "765150880499",
  appId: "1:765150880499:web:4b19a0e5fea8f02144cd86",
  measurementId: "G-SWM6GGQ6N4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
