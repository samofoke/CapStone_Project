import { createContext, useState } from "react";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const storedValue = { currentUser, setCurrentUser };

  return (
    <UserContext.Provider value={storedValue}>{children}</UserContext.Provider>
  );
};
