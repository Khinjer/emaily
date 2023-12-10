import axios from "axios";
import { FETCH_USER, UPDATE_CREDIT } from "./types";

// TODO: Add ERRORS handlers

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

// dont think this is gonna useful ! TODO: delete this after
export const updateCredit = (user) => (dispatch) => {
  dispatch({ type: FETCH_USER, payload: user });
  return { type: UPDATE_CREDIT, payload: user.credit };
};

export const submitSurvey = (values, history) => async (dispatch) => {
  const res = await axios.post("/api/survey", values);

  history.push("/surveys");
  dispatch({ type: FETCH_USER, payload: res.data });
};
