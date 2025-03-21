import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import MyWork from "./pages/MyWork";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MyWork />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
