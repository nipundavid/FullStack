import React, { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = (props) => {
  const appInfo = {
    loginStatus: true,
  };

  const [Data, setData] = useState(appInfo);
  return (
    <div>
      <LoginContext.Provider value={[Data, setData]}>
        {" "}
        {props.children}{" "}
      </LoginContext.Provider>{" "}
    </div>
  );
};
