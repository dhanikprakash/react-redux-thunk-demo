import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function searchQueryReducer(
  state = initialState.searchKey,
  action
) {
  switch (action.type) {
    case types.CREATE_SEARCH:
      return action.searchKey;
    default:
      return state;
  }
}
