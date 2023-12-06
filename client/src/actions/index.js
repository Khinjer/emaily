import axios from "axios";
import { FETCH_USER, UPDATE_CREDIT } from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const updateCredit = (user) => (dispatch) => {
  dispatch({type: FETCH_USER, payload: user});
  return { type: UPDATE_CREDIT, payload: user.credit };
};
