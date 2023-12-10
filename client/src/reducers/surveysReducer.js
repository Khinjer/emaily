import { FETCH_SURVEYS } from "../actions";

export default surveysReducers = (state = [], action) => {
  switch (action.type) {
    case FETCH_SURVEYS:
      return action.payload;
    default:
      return state;
  }
};
