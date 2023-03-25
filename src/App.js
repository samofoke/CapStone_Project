import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
import HomePage from "./routes/homepage/homepage";
import Authentication from "./routes/authentication/authentication";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
