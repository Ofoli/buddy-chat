import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./root-reducer";
import rootSaga from "../sagas/root";

const BUDDY_CHAT_STORAGE = "buddy-chat";
//functions to persist state in local storage
const saveStateToLocalStorage = (state: StoreType) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(BUDDY_CHAT_STORAGE, serializedState);
  } catch (err) {
    console.log(err);
  }
};

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem(BUDDY_CHAT_STORAGE);
    if (serializedState == null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

const persistState = loadStateFromLocalStorage();
const sagaMiddleware = createSagaMiddleware();
const showDevTools =
  process.env.NODE_ENV !== "production" && typeof window !== "undefined";

const store = configureStore({
  reducer: rootReducer,
  devTools: showDevTools,
  preloadedState: persistState,
  middleware: [sagaMiddleware],
});

export type StoreType = ReturnType<typeof store.getState>;

sagaMiddleware.run(rootSaga);
store.subscribe(() => saveStateToLocalStorage(store.getState()));

export default store;
