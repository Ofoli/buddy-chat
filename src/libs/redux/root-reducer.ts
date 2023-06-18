import { combineReducers } from "redux";
import authReducer from "./ducks/auth-reducer";

const rootReducer = combineReducers({
  authSlice: authReducer,
});

export default rootReducer;
