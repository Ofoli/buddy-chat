import { db } from "./config";
import { collection, doc } from "firebase/firestore";

export const USER_COLLECTION = "users";
export const CONTACT_COLLECTION = "contacts";

export const userCollection = collection(db, USER_COLLECTION);
export const contactCollection = collection(db, CONTACT_COLLECTION);

export const createDocRef = (col: string, id: string) => doc(db, col, id);
