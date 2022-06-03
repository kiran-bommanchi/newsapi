import React, { useState, createContext, useMemo } from "react";

export const GlobalDataContext = createContext(null);

const GlobalDataContextProvider = (props) => {
  const [data, setData] = useState(null);
  const [dataCopy, setDataCopy] = useState(null);

  const value = useMemo(
    () => ({
      data,
      dataCopy,
      setDataCopy,
      setData,
    }),
    [data, dataCopy]
  );

  return (
    <GlobalDataContext.Provider value={value}>
      {props.children}
    </GlobalDataContext.Provider>
  );
};

export default GlobalDataContextProvider;
