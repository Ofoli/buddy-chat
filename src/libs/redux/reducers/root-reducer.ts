import { combineReducers } from "redux";
import authReducer from "./auth-reducer";
import uiReducer from "./ui-reducer";
const rootReducer = combineReducers({
  uiSlice: uiReducer,
  authSlice: authReducer,
});

export default rootReducer;
