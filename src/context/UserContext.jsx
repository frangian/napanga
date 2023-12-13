import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("user" || null))
  );

  const login = ( token ) => {
    const updatedUser = { ...user, access: true, token };
    setUser(updatedUser);
    sessionStorage.setItem("user", JSON.stringify(updatedUser));
  };

  const logout = () => {
    setUser(null)
    sessionStorage.removeItem("user");
  }

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
