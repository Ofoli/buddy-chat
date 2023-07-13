import type { AuthState } from "../../../types/store-slices";
import type { User, LoginData, RegisterData } from "../../../types/user";

export const LOGIN_REQUESTED = "LOGIN_REQUESTED";
export const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";
export const REGISTER_REQUESTED = "REGISTER_REQUESTED";
export const REGISTER_SUCCESSFUL = "REGISTER_SUCCESSFUL";
export const LOGOUT_REQUESTED = "LOGOUT_REQUESTED";
export const LOGOUT_SUCCESSFUL = "LOGOUT_SUCCESSFUL";

export const logoutRequested = () => ({ type: LOGOUT_REQUESTED });
export const logoutSuccessful = () => ({ type: LOGOUT_SUCCESSFUL });
export const loginRequested = (payload: LoginData) => ({
  type: LOGIN_REQUESTED,
  payload,
});
export const loginSuccessful = (payload: User) => ({
  type: LOGIN_SUCCESSFUL,
  payload,
});
export const registerRequested = (payload: RegisterData) => ({
  type: REGISTER_REQUESTED,
  payload,
});
export const registerSuccessful = (payload: User) => ({
  type: REGISTER_SUCCESSFUL,
  payload,
});
/*
===== REDUCER ===== 
*/
const initialState = {
  user: null,
  loggedIn: false,
};

export default function authReducer(
  state: AuthState = initialState,
  action: { type: string; payload: User | undefined }
): AuthState {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESSFUL:
    case REGISTER_SUCCESSFUL: {
      const user = payload as User;
      return { user, loggedIn: true };
    }
    case LOGOUT_SUCCESSFUL:
      return initialState;
    default:
      return state;
  }
}
