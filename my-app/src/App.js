import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Pages/Login";
import Home from "./Components/Pages/Home";
import Nav from "./Components/Pages/Nav";
import { LoginContext } from "./Components/LoginContext";
import { DataContext } from "./Components/DataContext";

function App() {
  const [loginStatus, setStatus] = useContext(LoginContext);
  const isoggedIn = loginStatus.loginStatus;

  const [data, setData] = useContext(DataContext);

  return (
    <div>
      <Nav />
      {!isoggedIn ? (
        <Login />
      ) : (
        <div>
          <Home />
        </div>
      )}
    </div>
  );
}

export default App;
