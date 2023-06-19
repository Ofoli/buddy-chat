import { useSelector, useDispatch } from "react-redux";
import type { StoreType } from "./store";

const SLICES = {
  authSlice: "authSlice",
  //   uiSlice: "uiSlice",
} as const;

const useReduxHooks = () => {
  const dispatch = useDispatch();
  const store = useSelector((state: StoreType) => state);
  const sliceSelector = (slice: keyof typeof SLICES) => store[slice];
  return { dispatch, sliceSelector, SLICES };
};

export default useReduxHooks;
