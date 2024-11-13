"use client";
const { createContext, useState, useContext } = require("react");

const context = createContext();

export default function AppContext({ children }) {
  const [data, setData] = useState("");
  return (
    <context.Provider value={{ data, setData }}>{children}</context.Provider>
  );
}

export const useProvider = () => useContext(context);
