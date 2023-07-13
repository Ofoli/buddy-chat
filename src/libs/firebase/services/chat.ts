import {
  serverTimestamp,
  setDoc,
  getDoc,
  addDoc,
  query,
  where,
} from "firebase/firestore";
import {
  createDocRef,
  fetchData,
  chatCollection,
  recentChatCollection,
  CHAT_COLLECTION,
  RECENT_CHAT_COLLECTION,
} from "../index/db";
import type { Chat, ChatData } from "../../../types/user";

export async function createChatApiRequest(data: ChatData): Promise<Chat> {
  const createdChat = await addDoc(chatCollection, {
    ...data,
    createdAt: serverTimestamp(),
  });
  const chatDocRef = createDocRef(CHAT_COLLECTION, createdChat.id);
  const chatDoc = await getDoc(chatDocRef);

  if (!chatDoc.exists) throw new Error("Failed to add chats");

  const chat = chatDoc.data();
  if (chat === undefined) throw new Error("Chat data not found");

  //update recent chat
  const setRecentChatDocRef = createDocRef(
    RECENT_CHAT_COLLECTION,
    data.channelId
  );
  await setDoc(setRecentChatDocRef, chat);

  return {
    ...data,
    id: createdChat.id,
    createdAt: chat.createdAt,
  };
}
export async function fetchRecentChatsApiRequest(userId: string) {
  const recentChatsQuery = query(
    recentChatCollection,
    where("source", "==", userId),
    where("destination", "==", userId)
  );

  return await fetchData<Chat>(recentChatsQuery);
}
export async function fetchChatHistoryApiRequest(channelId: string) {
  const fetchChatsQuery = query(
    recentChatCollection,
    where("channelId", "==", channelId)
  );

  return await fetchData<Chat>(fetchChatsQuery);
}
