import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Login from "./Components/Pages/Login";
import Home from "./Components/Pages/Home";
import Nav from "./Components/Pages/Nav";
import Details from "./Components/Pages/Details";
import PageNotFound from "./Components/Pages/PageNotFound";
import { LoginContext } from "./Components/LoginContext";
import { DataContext } from "./Components/DataContext";

function App() {
  const [loginStatus, setStatus] = useContext(LoginContext);
  const isoggedIn = loginStatus.loginStatus;

  const [data, setData] = useContext(DataContext);

  return (
    <div>
      <Nav />
      <Switch>
        {!isoggedIn ? (
          <Route exact path="/" component={Login}></Route>
        ) : (
          <div>
            <Route exact path="/" component={Home}></Route>
            <Route path="/details" component={Details}></Route>
            <Route path="/PageNotFound" component={PageNotFound}></Route>
          </div>
        )}
      </Switch>
    </div>
  );
}

export default App;
