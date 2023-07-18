import type { Chat, ChatData } from "../../../types/user";
import type { ChatState } from "../../../types/store-slices";

export const CREATE_CHAT_REQUESTED = "CREATE_CHAT_REQUESTED";
export const FETCH_RECENT_CHATS_REQUESTED = "FETCH_RECENT_CHATS_REQUESTED";
export const FETCH_CHATS_REQUESTED = "FETCH_CHATS_REQUESTED";

export const CREATE_CHAT_SUCCESSFUL = "CREATE_CHAT_SUCCESSFUL";
export const FETCH_RECENT_CHATS_SUCCESSFUL = "FETCH_RECENT_CHATS_SUCCESSFUL";
export const FETCH_CHATS_SUCCESSFUL = "FECTH_CHATS_SUCESSFUL";

export const requestCreateChat = (payload: ChatData) => ({
  type: CREATE_CHAT_REQUESTED,
  payload,
});
export const requestFetchRecentChats = (userId: string) => ({
  type: FETCH_RECENT_CHATS_REQUESTED,
  payload: userId,
});
export const requestFetchChats = (channelId: string) => ({
  type: FETCH_CHATS_REQUESTED,
  payload: channelId,
});

export const receiveCreateChat = (payload: Chat) => ({
  type: CREATE_CHAT_SUCCESSFUL,
  payload,
});
export const receiveFetchRecentChats = (payload: Chat[]) => ({
  type: FETCH_RECENT_CHATS_SUCCESSFUL,
  payload,
});
export const receiveFetchChats = (payload: Chat[]) => ({
  type: FETCH_CHATS_SUCCESSFUL,
  payload,
});

const initialState: ChatState = {
  recentChats: [],
  chats: [],
};

export default function chatReducer(
  state = initialState,
  action: { type: string; payload: Chat | Chat[] }
): ChatState {
  const { type, payload } = action;
  switch (type) {
    case CREATE_CHAT_SUCCESSFUL: {
      const chat = payload as Chat;
      const uniqueRecentChats = state.recentChats.filter(
        (c) => c.channelId !== chat.channelId
      );
      const updatedRecentChats = [...uniqueRecentChats, chat];
      return {
        recentChats: updatedRecentChats,
        chats: [...state.chats, chat],
      };
    }
    case FETCH_CHATS_SUCCESSFUL: {
      const chats = payload as Chat[];
      return { ...state, chats };
    }
    case FETCH_RECENT_CHATS_SUCCESSFUL: {
      const recentChats = payload as Chat[];
      return { ...state, recentChats };
    }
    default:
      return state;
  }
}
