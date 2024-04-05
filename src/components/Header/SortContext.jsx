import { createContext, useState } from "react";

export const SortContext = createContext();

export const SortProvider = ({ children }) => {
  const [currentSort, setCurrentSort] = useState("");

  return (
    <SortContext.Provider value={{ currentSort, setCurrentSort }}>
      {children}
    </SortContext.Provider>
  );
};
