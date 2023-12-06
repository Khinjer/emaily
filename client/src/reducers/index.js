import { combineReducers } from "redux";
import authReducer from "./authReducer";
import creditReducer from "./creditReducer";

export default combineReducers({
  auth: authReducer,
  credit: creditReducer,
});
