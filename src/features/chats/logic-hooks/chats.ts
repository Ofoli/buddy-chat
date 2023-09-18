import { useEffect, useRef } from "react";
import { Timestamp } from "firebase/firestore";
import type { ChatDoc } from "../index/imports";
import {
  useReduxHooks,
  monitorOngoingChats,
  requestFetchChats,
  addSnapshotChat,
} from "../index/imports";
import { createChannelId } from "./add-chat";
import { Chat } from "../../../types/user";

export default function useChatsLogic() {
  const lastChatRef = useRef<HTMLDivElement>(null);
  const { dispatch, slices } = useReduxHooks();
  const { id } = slices.authSlice.user!;
  const { chats, buddyId } = slices.chatSlice;
  const channelId = createChannelId(id, buddyId);

  const updateReduxWithOngoingChats = () => {
    console.log("MONITOR_RUNNING");
    const populateOngoingChatsArray = (chatDoc: ChatDoc) => {
      const chat = { ...(chatDoc.data() as Chat), id: chatDoc.id };
      if (chat.source !== id) {
        console.log({ DISPATCHING_MONITOR_CHAT: chat.message });
        dispatch(addSnapshotChat(chat));
      }
    };
    monitorOngoingChats(channelId, populateOngoingChatsArray);
  };
  const focusOnLastChild = () => {
    if (lastChatRef.current) {
      lastChatRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const getChatRef = (chatIdx: number) =>
    chats.length - 1 === chatIdx ? lastChatRef : null;

  useEffect(
    () => updateReduxWithOngoingChats,
    [buddyId, updateReduxWithOngoingChats]
  );

  useEffect(() => {
    dispatch(requestFetchChats(channelId));
  }, [channelId]);

  useEffect(() => focusOnLastChild(), [chats]);

  return { chats, userId: id, getChatRef };
}

export const formatChatTime = (createdAt: Timestamp) => {
  if (!createdAt) return "..";
  const { seconds, nanoseconds } = createdAt;
  const milliseconds = nanoseconds / 1000000 + seconds * 1000;
  const date = new Date(milliseconds);
  const hour = date.getHours();
  const min = date.getMinutes();
  const timestamp = `${hour}:${Number(min) > 9 ? min : "0" + min}`;

  return timestamp;
};
