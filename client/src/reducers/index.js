import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import creditReducer from "./creditReducer";

export default combineReducers({
  auth: authReducer,
  credit: creditReducer,
  form: reduxForm,
});
