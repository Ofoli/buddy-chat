import { db } from "./config";
import { collection, doc, getDocs } from "firebase/firestore";
import type { Query, DocumentData } from "firebase/firestore";

export const USER_COLLECTION = "users";
export const CONTACT_COLLECTION = "contacts";
export const CHAT_COLLECTION = "chats";
export const RECENT_CHAT_COLLECTION = "recentChats";

export const userCollection = collection(db, USER_COLLECTION);
export const contactCollection = collection(db, CONTACT_COLLECTION);
export const recentChatCollection = collection(db, RECENT_CHAT_COLLECTION);
export const getChatCollection = (channelId: string) =>
  collection(db, `${CHAT_COLLECTION}/ch_${channelId}/${channelId}`);

export const createDocRef = (col: string, id: string) => doc(db, col, id);
export async function fetchData<T>(query: Query<DocumentData>) {
  const result: T[] = [];
  const resultSnapshot = await getDocs(query);

  resultSnapshot.forEach((doc) => {
    const data = doc.data();
    const item = {
      ...(data as T),
      id: doc.id,
    };
    result.push(item);
  });

  return result;
}
