import React from "react";
import { Route, Switch } from "react-router-dom";
import SearchPage from "./search/SearchPage";
import { ToastContainer } from "react-toastify";
import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={SearchPage} />
      </Switch>
      <ToastContainer position="top-right" />
    </>
  );
}

export default App;
