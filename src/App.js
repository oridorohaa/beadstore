import Home from "./routes/home.component";
import Navigation from "./routes/navigation.component";
import Authentication from "./routes/authentication.component";

import { Routes, Route, Outlet } from "react-router-dom";
import Shop from "./routes/shop.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
  // return <Home />;
};

export default App;
