import { logoutRequested, useReduxHooks } from "../../chats/index/imports";

export default function useHeaderLogic() {
  const { dispatch, slices } = useReduxHooks();
  const { user: currentUser } = slices.authSlice;

  const handleUserLogout = () => dispatch(logoutRequested());

  return { currentUser, handleUserLogout };
}
