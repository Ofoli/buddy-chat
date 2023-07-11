import { useSelector, useDispatch } from "react-redux";
import type { StoreType } from "./store";
import type { AuthState, UIState } from "../../types/store-slices";

const useReduxHooks = () => {
  const dispatch = useDispatch();

  const slices = {
    authSlice: useSelector((state: StoreType) => state.authSlice) as AuthState,
    uiSlice: useSelector((state: StoreType) => state.uiSlice) as UIState,
  };

  return { dispatch, slices };
};

export default useReduxHooks;
