import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase with your config
const firebaseConfig = {
  apiKey: "AIzaSyCiLi7aph3siGjVZy8dNC_Ejva5lPjruh0",
  authDomain: "react-native-todo-app-3caad.firebaseapp.com",
  projectId: "react-native-todo-app-3caad",
  storageBucket: "react-native-todo-app-3caad.appspot.com",
  messagingSenderId: "228789674584",
  appId: "1:228789674584:web:79e93f16f2838283f4202d",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
