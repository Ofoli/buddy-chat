import { useSelector, useDispatch } from "react-redux";
import type { StoreType } from "./store";

const useReduxHooks = () => {
  const dispatch = useDispatch();

  const slices = {
    uiSlice: useSelector((state: StoreType) => state.uiSlice),
    authSlice: useSelector((state: StoreType) => state.authSlice),
    chatSlice: useSelector((state: StoreType) => state.chatSlice),
    contactSlice: useSelector((state: StoreType) => state.contactSlice),
  };

  return { dispatch, slices };
};

export default useReduxHooks;
