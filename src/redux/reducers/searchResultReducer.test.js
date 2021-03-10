import searchResultReducer from "./searchResultReducer";
import * as types from "../actions/actionTypes";

it("should update results when passed LOAD_RESULT_SUCCESS", () => {
  // arrange
  const initialState = {
    searchKey: "",
    results: { resultCount: 0, results: { Name: "Tom" } },
  };

  const data = { resultCount: 1, results: { Name: "John" } };

  const action = { type: types.LOAD_RESULT_SUCCESS, results: data };
  // act
  const newState = searchResultReducer(initialState.results, action);

  // assert
  expect(newState).toEqual(data);
});
