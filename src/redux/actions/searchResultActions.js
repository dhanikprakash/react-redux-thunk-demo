import * as types from "./actionTypes";
import * as searchApi from "../../api/searchApi";

export function loadResultSuccess(results) {
  return { type: types.LOAD_RESULT_SUCCESS, results };
}

export function loadResults(offSet, limit, searchKey) {
  return async function (dispatch) {
    try {
      const results = await searchApi.getResults(offSet, limit, searchKey);
      dispatch(loadResultSuccess(results));
    } catch (error) {
      // In real app, dispatch error handlers.
      console.log("Api call error");
    }
  };
}
