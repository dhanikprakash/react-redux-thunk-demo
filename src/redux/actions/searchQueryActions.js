import * as types from "./actionTypes";

export function searchQueryActions(searchKey) {
  return { type: types.CREATE_SEARCH, searchKey: searchKey };
}