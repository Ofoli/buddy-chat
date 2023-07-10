import { logoutRequested, useReduxHooks } from "../index/imports";
import type { AuthState } from "../index/imports";

export default function useHeaderLogic() {
  const { dispatch, SLICES, sliceSelector } = useReduxHooks();
  const { user: currentUser } = sliceSelector(SLICES.authSlice) as AuthState;

  const handleUserLogout = () => dispatch(logoutRequested());

  return { currentUser, handleUserLogout };
}
