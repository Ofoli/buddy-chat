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
};

export type { AuthState, UIState };
