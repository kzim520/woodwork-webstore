import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className="nav-link active" to="/">
            My Work
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/custom-orders">
            Custom Orders
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Layout;
