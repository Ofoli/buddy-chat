import {
  serverTimestamp,
  setDoc,
  getDoc,
  addDoc,
  query,
  where,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import {
  createDocRef,
  fetchData,
  getChatCollection,
  recentChatCollection,
  CHAT_COLLECTION,
  RECENT_CHAT_COLLECTION,
} from "../index/db";
import { QueryDocumentSnapshot, DocumentData } from "firebase/firestore";
import type { Chat, ChatData } from "../../../types/user";
import { error } from "console";

export async function createChatApiRequest(data: ChatData): Promise<Chat> {
  const chatCollection = getChatCollection(data.channelId);
  const createdChat = await addDoc(chatCollection, {
    ...data,
    createdAt: serverTimestamp(),
  });
  const channelCollection = `${CHAT_COLLECTION}/ch_${data.channelId}/${data.channelId}`;
  const chatDocRef = createDocRef(channelCollection, createdChat.id);
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
    ...(chat as Chat),
    id: createdChat.id,
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
  const chatCollection = getChatCollection(channelId);
  const fetchChatsQuery = query(chatCollection, orderBy("createdAt"));

  return await fetchData<Chat>(fetchChatsQuery);
}

export function monitorOngoingChats(
  channelId: string,
  updator: (doc: QueryDocumentSnapshot<DocumentData>) => void
) {
  console.log({ "@CHAT_SERVICE_CH": channelId });
  const chatCollection = getChatCollection(channelId);
  const searchQuery = query(chatCollection, orderBy("createdAt"));
  return onSnapshot(
    searchQuery,
    (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log({ "@CHAT_SERVICE_DOC_ID": doc.id });
        updator(doc);
      });
    },
    (err) => console.log({ FIREBASE_ONSNAPSHOT_ERROR: err })
  );
}
