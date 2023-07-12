import { combineReducers } from "redux";
import authReducer from "./ducks/auth";
import uiReducer from "./ducks/ui";
import contactReducer from "./ducks/contact";

const rootReducer = combineReducers({
  authSlice: authReducer,
  uiSlice: uiReducer,
  contactSlice: contactReducer,
});

export default rootReducer;
