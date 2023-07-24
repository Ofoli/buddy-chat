import type { Chat, ChatData } from "../../../types/user";
import type { ChatState } from "../../../types/store-slices";

type ChatPayload = string | Chat | Chat[];

const SELECT_BUDDY = "SELECT_BUDDY";
const CLEAR_SELECTED_BUDDY = "CLEAR_SELECTED_BUDDY";
const ADD_SNAPSHOT_CHAT = "ADD_SNAPSHOT_CHAT";

export const CREATE_CHAT_REQUESTED = "CREATE_CHAT_REQUESTED";
export const FETCH_CHATS_REQUESTED = "FETCH_CHATS_REQUESTED";
export const IS_BUDDY_ACTIVE_REQUESTED = "IS_BUDDY_ACTIVE_REQUESTED";
export const FETCH_RECENT_CHATS_REQUESTED = "FETCH_RECENT_CHATS_REQUESTED";

const CREATE_CHAT_SUCCESSFUL = "CREATE_CHAT_SUCCESSFUL";
const FETCH_CHATS_SUCCESSFUL = "FECTH_CHATS_SUCCESSFUL";
const IS_BUDDY_ACTIVE_SUCCESS = "IS_BUDDY_ACTIVE_SUCCESS";
const FETCH_RECENT_CHATS_SUCCESSFUL = "FETCH_RECENT_CHATS_SUCCESSFUL";

export const clearSelectedBuddy = () => ({ type: CLEAR_SELECTED_BUDDY });
export const setSelectedBuddy = (id: string) => ({
  type: SELECT_BUDDY,
  payload: id,
});
export const addSnapshotChat = (chat: Chat) => ({
  type: ADD_SNAPSHOT_CHAT,
  payload: chat,
});

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
export const requestIsBuddyActive = (email: string) => ({
  type: IS_BUDDY_ACTIVE_REQUESTED,
  payload: email,
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
export const receiveIsBuddyActiveSuccess = (isActive: boolean) => ({
  type: IS_BUDDY_ACTIVE_SUCCESS,
  payload: isActive,
});

const initialState: ChatState = {
  recentChats: [],
  chats: [],
  buddyId: "NO_BUDDY_SELECTED",
};

export default function chatReducer(
  state = initialState,
  action: { type: string; payload: ChatPayload }
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
        ...state,
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
    case SELECT_BUDDY: {
      return { ...state, buddyId: payload as string };
    }
    case CLEAR_SELECTED_BUDDY: {
      return { ...state, buddyId: "NO_BUDDY_SELECTED" };
    }
    case ADD_SNAPSHOT_CHAT: {
      const chat = payload as Chat;
      const chatExist =
        state.chats.find(({ id }) => id === chat.id) !== undefined;

      if (chatExist) return state;

      const uniqueRecentChats = state.recentChats.filter(
        (c) => c.channelId !== chat.channelId
      );
      const updatedRecentChats = [...uniqueRecentChats, chat];
      return {
        ...state,
        recentChats: updatedRecentChats,
        chats: [...state.chats, chat],
      };
    }
    default:
      return state;
  }
}
