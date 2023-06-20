import { combineReducers } from "redux";
import authReducer from "./ducks/auth";
import uiReducer from "./ducks/ui";

const rootReducer = combineReducers({
  authSlice: authReducer,
  uiSlice: uiReducer,
});

export default rootReducer;
