import { Link, Outlet } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <>
      <nav className="Navbar">
        <ul className="Navbar__list">
          <li className="Navbar__item">
            <Link to="/">News</Link>
          </li>
          <li className="Navbar__item">
            <Link to="/search">Search</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}