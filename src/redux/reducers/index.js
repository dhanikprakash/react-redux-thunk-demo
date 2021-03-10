import { combineReducers } from "redux";
import searchQueryReducer from "./searchQueryReducer";
import searchResultReducer from "./searchResultReducer";

const rootReducer = combineReducers({
  searchKey: searchQueryReducer,
  results: searchResultReducer,
});
export default rootReducer;
