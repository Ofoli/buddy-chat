import type { User, Contact } from "./user";
import type { RequestStatus } from "./ui";

type AuthState = {
  user: User | null;
  loggedIn: boolean;
};

type UIState = {
  loadingActions: string[];
  errors: RequestStatus[];
  successMessages: RequestStatus[];
  isResultPanelOpen: boolean;
};

type ContactState = {
  selectedContactId: string;
  contacts: Contact[];
};

export type { AuthState, UIState, ContactState };
