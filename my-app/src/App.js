import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { InfoContext } from "./Components/Context";
import Login from "./Components/Pages/Login";
import ShowData from "./Components/Pages/ShowData";
import Nav from "./Components/Pages/Nav";

function App() {
  const [data, setData] = useContext(InfoContext);
  const isLoggedIn = data.appInfo.isLoggedIn;
  console.log(isLoggedIn);
  return (
    <div>
      <Nav />
      {!isLoggedIn ? (
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
