import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// Initialize Firebase with your config
const firebaseConfig = {
  apiKey: "AIzaSyBNXSOMw0uu4wBnQQsWxnhLYIuWYzLi9T8",
  authDomain: "todo-react-native-a0980.firebaseapp.com",
  projectId: "todo-react-native-a0980",
  storageBucket: "todo-react-native-a0980.appspot.com",
  messagingSenderId: "588684958564",
  appId: "1:588684958564:web:578e9ebeb36e57bf9af871",
  measurementId: "G-63TY93552E",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

const todosCollection = db.collection("todos");

export { auth, db, todosCollection, storage };
