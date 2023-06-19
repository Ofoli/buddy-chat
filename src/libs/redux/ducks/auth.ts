import type { AuthState, User, LoginData, RegisterData } from "../types/auth";

export const LOGIN_REQUESTED = "LOGIN_REQUESTED";
export const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";
export const REGISTER_REQUESTED = "REGISTER_REQUESTED";
export const REGISTER_SUCCESSFUL = "REGISTER_SUCCESSFUL";
export const LOGOUT = "LOGOUT";

export const logout = () => ({ type: LOGOUT });
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
) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESSFUL:
    case REGISTER_SUCCESSFUL:
      return { ...payload, loggedIn: true };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}
