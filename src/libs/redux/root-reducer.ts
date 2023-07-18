import { combineReducers } from "redux";
import authReducer from "./ducks/auth";
import uiReducer from "./ducks/ui";
import contactReducer from "./ducks/contact";
import chatReducer from "./ducks/chat";

const rootReducer = combineReducers({
  authSlice: authReducer,
  uiSlice: uiReducer,
  contactSlice: contactReducer,
  chatSlice: chatReducer,
});

export default rootReducer;
