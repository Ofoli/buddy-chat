import { useEffect } from "react";
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
  const { dispatch, slices } = useReduxHooks();
  const { id } = slices.authSlice.user!;
  const { chats, buddyId } = slices.chatSlice;
  const channelId = createChannelId(id, buddyId);

  const updateReduxWithOngoingChats = () => {
    console.log("MONITOR_RUNNING");
    const populateOngoingChatsArray = (chatDoc: ChatDoc) => {
      const chat = { ...(chatDoc.data() as Chat), id: chatDoc.id };
      console.log({ MONITOR_CHAT: chat });
      if (chat.source !== id) {
        console.log({ DISPATCHING_MONITOR_CHAT_REDUX: chat.message });
        dispatch(addSnapshotChat(chat));
      }
    };
    monitorOngoingChats(channelId, populateOngoingChatsArray);
  };

  useEffect(
    () => updateReduxWithOngoingChats,
    [buddyId, updateReduxWithOngoingChats]
  );

  useEffect(() => {
    dispatch(requestFetchChats(channelId));
  }, [channelId]);
  return { chats, userId: id };
}
