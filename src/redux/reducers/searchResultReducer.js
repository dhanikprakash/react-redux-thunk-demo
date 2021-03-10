import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function searchResultReducer(
  state = initialState.results,
  action
) {
  switch (action.type) {
    case types.LOAD_RESULT_SUCCESS:
      return action.results;
    default:
      return state;
  }
}
