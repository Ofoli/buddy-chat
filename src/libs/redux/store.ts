import { configureStore } from "@reduxjs/toolkit";
// import {  applyMiddleware, compose } from "redux";
// import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/root-reducer";
// import rootSaga from "../sagas/rootSaga";

//functions to persist state in local storage
const saveStateToLocalStorage = (state: any) => {
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

// const composeEnhancers =
//   (process.env.NODE_ENV !== "production" &&
//     typeof window !== "undefined" &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;
// localStorage.clear();
// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(
//   rootReducer,
//   persistState,
//   composeEnhancers(applyMiddleware(sagaMiddleware))
// );

const showDevTools =
  process.env.NODE_ENV !== "production" && typeof window !== "undefined";

const store = configureStore({
  reducer: rootReducer,
  devTools: showDevTools,
  preloadedState: persistState,
});

// sagaMiddleware.run(rootSaga);

store.subscribe(() => saveStateToLocalStorage(store.getState()));

export default store;
