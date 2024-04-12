import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
import HomePage from "./routes/homepage/homepage";
import Authentication from "./routes/authentication/authentication";
import Shop from "./routes/shop-page/shop";
import { useDispatch } from "react-redux";
import Checkout from "./routes/checkout/checkout";
import { setCurrentUser } from "./store/user/user.action";
import {
  authStateChangeListener,
  createDocumentFromAuth,
} from "./util/firebase/firebase.utils";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubcribe = authStateChangeListener((user) => {
      if (user) {
        createDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubcribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
