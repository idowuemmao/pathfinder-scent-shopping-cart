import { BrowserRouter, Routes, Route } from "react-router-dom";
import Perfs from "./pages/Perfs";
import Layout from "./components/Layout";
import Others from "./pages/Others";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import { useState } from "react";

function App() {
  const [totalCount, setTotalCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="perfumes"
            element={<Perfs setTotalCount={setTotalCount} />}
          />
          <Route
            path="others"
            element={<Others setTotalCount={setTotalCount} />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
