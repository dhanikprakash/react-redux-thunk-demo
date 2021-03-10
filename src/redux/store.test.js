import { createStore } from "redux";
import rootReducer from "./reducers";
import initialState from "./reducers/initialState";
import * as searchQueryActions  from "./actions/searchQueryActions";


it("Should handle creating Search query", function() {
    // arrange
    const store = createStore(rootReducer, initialState);
    const search = {
        searchKey: 'John',
        results:{}
    };
  
    // act
    const action = searchQueryActions.searchQueryActions(search.searchKey);
    store.dispatch(action);
  
    // assert
    const createdSearch = store.getState();
    expect(createdSearch).toEqual(search);
  });
  
