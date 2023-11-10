import { Link } from "react-router-dom";
import CartWidget from "../../common/CartWidget";
import "./navbar.css";
import logo from "../../../assets/logo.png";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <Link
        to={"/"}
        style={{
          textDecoration: "none",
        }}
      >
        <img src={logo} alt="logo" style={{ width: "150px", }} />
      </Link>
      <ul className="navbar-list">
        <li className="navbar-list-item">
          <Link to="/">Inicio</Link>
        </li>
        <li className="navbar-list-item">
          <Link to="/itemList">Productos</Link>
        </li>
        <li className="navbar-list-item">
          <Link to="/contact">Contacto</Link>
        </li>
      </ul>
      <CartWidget className="navbar-cart" />
    </div>
  );
};

export default NavBar;
