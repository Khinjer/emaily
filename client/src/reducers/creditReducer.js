import { UPDATE_CREDIT } from "../actions/types";
export default function (state = 0, action) {
  switch (action.type) {
    case UPDATE_CREDIT:
      return action.payload || 0;
    default:
      return state;
  }
}
