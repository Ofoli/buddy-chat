import { useEffect } from "react";
import type { ChatDoc } from "../index/imports";
import {
  useReduxHooks,
  monitorOngoingChats,
  requestFetchChats,
} from "../index/imports";
import { createChannelId } from "./add-chat";
import { Chat } from "../../../types/user";

export default function useChatsLogic() {
  const { dispatch, slices } = useReduxHooks();
  const { id } = slices.authSlice.user!;
  const { chats, buddyId } = slices.chatSlice;
  const channelId = createChannelId(id, buddyId);

  // const updateReduxWithOngoingChats = () => {
  //   const channelId = createChannelId(id, buddyId);
  //   const populateOngoingChatsArray = (chatDoc: ChatDoc) => {
  //     const chat = { ...(chatDoc.data() as Chat), id: chatDoc.id };
  //     const chatExistInRedux =
  //       chats.find(({ id }) => id === chatDoc.id) !== undefined;
  //     if (!chatExistInRedux && chat.source !== id) {
  //       // props.submitChat(theChat);
  //       console.log(chat);
  //     }
  //   };
  //   monitorOngoingChats(channelId, populateOngoingChatsArray);
  // };

  // useEffect(() => updateReduxWithOngoingChats, [buddyId]);

  useEffect(() => {
    dispatch(requestFetchChats(channelId));
  }, [channelId]);
  return { chats, userId: id };
}
