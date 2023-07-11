import type { User } from "./user";
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

export type { AuthState, UIState };
