import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Pages/Login";
import ShowData from "./Components/Pages/ShowData";
import Nav from "./Components/Pages/Nav";
import { LoginContext } from "./Components/LoginContext";

function App() {
  const [loginStatus, setStatus] = useContext(LoginContext);
  const isoggedIn = loginStatus.loginStatus;
  return (
    <div>
      <Nav />
      {!isoggedIn ? (
        <Login />
      ) : (
        <div>
          <ShowData />
        </div>
      )}
    </div>
  );
}

export default App;
