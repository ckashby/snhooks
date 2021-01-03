import React, { createContext, useState } from "react";

// export const UserContext = createContext();
const UserContext = createContext();

// This context provider is passed to any component requiring the context
export const UserProvider = ({ children }) => {
  const [name, setName] = useState("Clay");
  const [gender, setGender] = useState("male");

  return (
    <UserContext.Provider value={{ name, gender, setName, setGender }}>
      {children}
    </UserContext.Provider>
  );
};

// TODO: delete if line 4 works without default
export default UserContext;
