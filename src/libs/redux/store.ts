import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./root-reducer";
import rootSaga from "../sagas/root";

//functions to persist state in local storage
const saveStateToLocalStorage = (state: ReturnType<typeof store.getState>) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("partner-admin-panel", serializedState);
  } catch (err) {
    console.log(err);
  }
};

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("partner-admin-panel");
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

sagaMiddleware.run(rootSaga);

store.subscribe(() => saveStateToLocalStorage(store.getState()));

export default store;
