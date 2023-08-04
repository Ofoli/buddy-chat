import type { User, Contact, Chat } from "./user";
import type { RequestStatus } from "./ui";

type AuthState = {
  user: User | null;
  loggedIn: boolean;
};

type UIState = {
  loadingActions: string[];
  errors: RequestStatus[];
  successMessages: RequestStatus[];
  resultPanelItem: string;
};

type ContactState = Contact[];

type ChatState = {
  recentChats: Chat[];
  chats: Chat[];
  buddyId: string;
};

export type { AuthState, UIState, ContactState, ChatState };
