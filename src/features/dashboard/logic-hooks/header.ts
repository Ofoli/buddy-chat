import {
  logoutRequested,
  useReduxHooks,
  openResultPanel,
  closeResultPanel,
} from "../index/imports";

export default function useHeaderLogic() {
  const { dispatch, slices } = useReduxHooks();
  const { user: currentUser } = slices.authSlice;

  const handleUserLogout = () => dispatch(logoutRequested());
  const handleShowProfile = () => {
    dispatch(openResultPanel());
  };

  return { currentUser, handleUserLogout, handleShowProfile };
}
