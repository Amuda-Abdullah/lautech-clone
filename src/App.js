import Root from "./Root.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, ErrorPage } from "./components/index.js";

const App = () => (
  <BrowserRouter>
    <Routes>
      {/* app user routes */}
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
