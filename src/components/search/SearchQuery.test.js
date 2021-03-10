import React from "react";
import { render } from "@testing-library/react";
import SearchQuery from "./SearchQuery";
import configureStore from "../../redux/reducers/configureStore";
import { Provider as ReduxProvider } from "react-redux";

test("Search page should renders search button", () => {
  const store = configureStore();
  const { getByText } = render(
    <ReduxProvider store={store}>
      <SearchQuery />
    </ReduxProvider>
  );
  const search = getByText("Search");
  expect(search).toBeInTheDocument();
});

test("Search page should renders tool tip search input", () => {
  const store = configureStore();
  const { getByText } = render(
    <ReduxProvider store={store}>
      <SearchQuery />
    </ReduxProvider>
  );
  const search = getByText("Artist/Album/Song");
  expect(search).toBeInTheDocument();
});
