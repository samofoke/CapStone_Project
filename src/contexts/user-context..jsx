import { createContext, useState, useEffect } from "react";
import {
  authStateChangeListener,
  createDocumentFromAuth,
} from "../util/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const storedValue = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubcribe = authStateChangeListener((user) => {
      if (user) {
        createDocumentFromAuth(user);
      }
      setCurrentUser(user);
      //console.log(user);
    });
    return unsubcribe;
  }, []);

  return (
    <UserContext.Provider value={storedValue}>{children}</UserContext.Provider>
  );
};
