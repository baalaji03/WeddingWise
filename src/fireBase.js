// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "weddingwise-1bab9.firebaseapp.com",
  projectId: "weddingwise-1bab9",
  storageBucket: "weddingwise-1bab9.appspot.com",
  messagingSenderId: "392585597402",
  appId: "1:392585597402:web:b322c2e45bb035b45ab0e3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);