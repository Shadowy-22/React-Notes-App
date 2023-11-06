import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCMHpMUctu_4DDhPzSWb69UkUKcvvrAhFk",
  authDomain: "react-notes-ea226.firebaseapp.com",
  projectId: "react-notes-ea226",
  storageBucket: "react-notes-ea226.appspot.com",
  messagingSenderId: "449425850911",
  appId: "1:449425850911:web:ba15aa21a0f2416fda8b2a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")