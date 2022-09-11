import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // States
  const [value, setValue] = useState("Value");
  // Refs

  return (
    <AppContext.Provider value={{ setValue, value }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
