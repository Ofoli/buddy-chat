import {
  logoutRequested,
  useReduxHooks,
  openResultPanel,
} from "../index/imports";

import { RESULT_PANEL_ITEMS } from "./result-panel";

export default function useHeaderLogic() {
  const { dispatch, slices } = useReduxHooks();
  const { user: currentUser } = slices.authSlice;

  const handleUserLogout = () => dispatch(logoutRequested());
  const handleShowProfile = () =>
    dispatch(openResultPanel(RESULT_PANEL_ITEMS.PROFILE));

  return { currentUser, handleUserLogout, handleShowProfile };
}
