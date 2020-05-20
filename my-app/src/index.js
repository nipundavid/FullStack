import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { LoginProvider } from "./Components/LoginContext";
import { DataProvider } from "./Components/DataContext";
ReactDOM.render(
  <React.StrictMode>
    {/* <LoginProvider>
      <Router>
        <App />
      </Router>
    </LoginProvider> */}
    <LoginProvider>
      <DataProvider>
        <Router>
          <App />
        </Router>
      </DataProvider>
    </LoginProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
