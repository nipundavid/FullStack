import React, { createContext, useState } from "react";
import { Data } from "./Data";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const appData = {
    data: Data,
  };

  const [data, setData] = useState(appData);
  return (
    <div>
      <DataContext.Provider value={[data, setData]}>
        {props.children}
      </DataContext.Provider>
    </div>
  );
};
