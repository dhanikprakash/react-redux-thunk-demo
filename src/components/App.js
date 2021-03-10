import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import SearchPage from "./search/SearchPage";
import { ToastContainer } from "react-toastify";
import "./App.css";

function App() {
  return (
    <>
          <HashRouter basename={process.env.PUBLIC_URL}>
        <Route render={({ location }) => (
          <Switch location={location}>
            <Route exact path="/"><Redirect to="/SearchPage" /></Route>
            <Route path='/SearchPage' exact component={SearchPage} />
          </Switch>
        )} />
      </HashRouter>
    </>
  );
}

export default App;
