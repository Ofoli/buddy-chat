import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNtghlLSXn6FxUUdhADnL8cOYnLQeyj6Y",
  authDomain: "buddy-chat-a1454.firebaseapp.com",
  projectId: "buddy-chat-a1454",
  storageBucket: "buddy-chat-a1454.appspot.com",
  messagingSenderId: "690045739108",
  appId: "1:690045739108:web:0d2b8546575a561818bf71",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
