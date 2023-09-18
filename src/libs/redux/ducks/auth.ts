import type { AuthState } from "../../../types/store-slices";
import type {
  User,
  LoginData,
  RegisterData,
  UploadProfileData,
} from "../../../types/user";

export const LOGIN_REQUESTED = "LOGIN_REQUESTED";
export const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";
export const REGISTER_REQUESTED = "REGISTER_REQUESTED";
export const REGISTER_SUCCESSFUL = "REGISTER_SUCCESSFUL";
export const LOGOUT_REQUESTED = "LOGOUT_REQUESTED";
export const LOGOUT_SUCCESSFUL = "LOGOUT_SUCCESSFUL";
export const PROFILE_UPLOAD_REQUESTED = "PROFILE_UPLOAD_REQUESTED";
export const PROFILE_UPLOAD_SUCCESSFUL = "PROFILE_UPLOAD_SUCCESSFUL";

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
export const requestProfileUpload = (payload: UploadProfileData) => ({
  type: PROFILE_UPLOAD_REQUESTED,
  payload,
});
export const receiveProfileUploadSuccess = (photoUrl: string) => ({
  type: PROFILE_UPLOAD_SUCCESSFUL,
  payload: photoUrl,
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
  action: { type: string; payload: User | string | undefined }
): AuthState {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESSFUL:
    case REGISTER_SUCCESSFUL: {
      const user = payload as User;
      return { user, loggedIn: true };
    }
    case PROFILE_UPLOAD_SUCCESSFUL: {
      const photoUrl = payload as string;
      const updatedUser = { ...state.user, photoUrl } as User;
      return { ...state, user: updatedUser };
    }

    case LOGOUT_SUCCESSFUL:
      return initialState;
    default:
      return state;
  }
}
