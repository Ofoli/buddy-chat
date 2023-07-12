import { useSelector, useDispatch } from "react-redux";
import type { StoreType } from "./store";
import type {
  AuthState,
  UIState,
  ContactState,
} from "../../types/store-slices";

const useReduxHooks = () => {
  const dispatch = useDispatch();

  const slices = {
    uiSlice: useSelector((state: StoreType) => state.uiSlice) as UIState,
    authSlice: useSelector((state: StoreType) => state.authSlice) as AuthState,
    contactSlice: useSelector(
      (state: StoreType) => state.contactSlice
    ) as ContactState,
  };

  return { dispatch, slices };
};

export default useReduxHooks;
