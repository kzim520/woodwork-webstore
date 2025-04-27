import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import MyWork from "./pages/MyWork";
import CustomOrders from "./pages/CustomOrders";
import Shop from "./pages/Shop";
import ItemDetail from "./pages/ItemDetail";
import OrderConfirmation from "./pages/OrderConfirmation";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MyWork />} />
          <Route path="custom-orders" element={<CustomOrders />} />
          <Route path="shop" element={<Shop />} />
          <Route path="item/:id" element={<ItemDetail />} />
          <Route path="order-confirmation" element={<OrderConfirmation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
