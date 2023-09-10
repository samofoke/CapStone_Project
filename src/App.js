import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
import HomePage from "./routes/homepage/homepage";
import Authentication from "./routes/authentication/authentication";
import Shop from "./routes/shop-page/shop";
import Checkout from "./routes/checkout/checkout";

const App = () => {
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
