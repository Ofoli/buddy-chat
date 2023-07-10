import { db } from "./config";
import { collection, doc } from "firebase/firestore";

export const USER_COLLECTION = "users";

export const userCollection = collection(db, USER_COLLECTION);

export const createDocRef = (col: string, id: string) => doc(db, col, id);
