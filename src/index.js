import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from 'react-router-dom';
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./redux/reducers/configureStore";
import { Provider as ReduxProvider } from "react-redux";
import CssBaseline from '@material-ui/core/CssBaseline';

const store = configureStore();

ReactDOM.render(
  <ReduxProvider store={store}>
   <CssBaseline />
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
