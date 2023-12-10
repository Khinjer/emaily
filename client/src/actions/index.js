import axios from "axios";
import { FETCH_USER, UPDATE_CREDIT, FETCH_SURVEYS } from "./types";

// TODO: Add ERRORS handlers

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

// TODO: maybe delete this after / dont think this is gonna useful !
export const updateCredit = (user) => (dispatch) => {
  dispatch({ type: FETCH_USER, payload: user });
  return { type: UPDATE_CREDIT, payload: user.credit };
};

export const submitSurvey = (values, history) => async (dispatch) => {
  const res = await axios.post("/api/survey", values);

  history.push("/surveys");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const getSurveyList = () => async (dispatch) => {
  const res = await axios.get("/api/survey/list");
  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};
