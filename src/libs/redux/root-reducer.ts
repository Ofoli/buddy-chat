import { combineReducers } from "redux";
import authReducer from "./ducks/auth";

const rootReducer = combineReducers({
  authSlice: authReducer,
});

export default rootReducer;
