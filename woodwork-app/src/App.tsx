import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import MyWork from "./pages/MyWork";
import CustomOrders from "./pages/CustomOrders";
import Shop from "./pages/Shop";
import ItemDetail from "./pages/ItemDetail";
import OrderConfirmation from "./pages/OrderConfirmation";
import ScrollToTop from "./components/ScrollToTop";

/**
 * App Component
 *
 * This is the root component of the React application.
 * It defines all client-side routes using React Router v6 and wraps them in a
 * consistent layout with navigation.
 *
 * Features:
 * - Uses <BrowserRouter> for clean URLs and client-side navigation
 * - Includes a <ScrollToTop> component to reset scroll position on route change
 * - Renders a nested routing structure under a shared <Layout> component
 *
 * Routes:
 * - "/"                  → <MyWork /> (homepage with bio + portfolio)
 * - "/custom-orders"     → <CustomOrders /> (custom order form)
 * - "/shop"              → <Shop /> (eCommerce section)
 * - "/item/:id"          → <ItemDetail /> (detailed view of a portfolio item)
 * - "/order-confirmation" → <OrderConfirmation /> (thank-you screen after submission)
 */
function App() {
  return (
    <BrowserRouter>
      {/* Automatically scrolls to top on route change */}
      <ScrollToTop />

      <Routes>
        {/* All routes share the Layout wrapper (includes navbar) */}
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
