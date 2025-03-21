import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            My Work
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Custom Orders
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Shop
          </a>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Layout;
