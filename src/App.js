import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
import HomePage from "./routes/homepage/homepage";
import SignIn from "./routes/sign-in/sign-in";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
