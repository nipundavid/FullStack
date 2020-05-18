import React, { createContext, useState } from "react";

export const InfoContext = createContext();

export const InfoProvider = (props) => {
  const appInfo = {
    isLoggedIn: false,
  };

  const [Data, setData] = useState({ appInfo });
  return (
    <div>
      <InfoContext.Provider value={[Data, setData]}>
        {props.children}
      </InfoContext.Provider>
    </div>
  );
};
