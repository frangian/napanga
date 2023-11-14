import { Link } from "react-router-dom";
import CartWidget from "../../common/CartWidget";
import "./navbar.css";
import logo from "../../../assets/logo.png";
import { useState } from "react";

const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="navbar-container">
      <Link
        to={"/"}
        style={{
          textDecoration: "none",
        }}
      >
        <img src={logo} alt="logo" style={{ width: "120px" }} />
      </Link>
      <ul className="navbar-list">
        <li className="navbar-list-item">
          <Link to="/">Inicio</Link>
        </li>
        <li className="navbar-list-item">
          <div className="navbar-products-dropdown">
            <span onClick={toggleMenu}>Productos</span>
            {menuVisible && (
              <div className="dropdown-menu">
                <Link to="/products">Todas</Link>
                <Link to="/products/Produccion">Producción</Link>
                <Link to="/products/Deco">Deco</Link>
              </div>
            )}
          </div>
        </li>{" "}
        <li className="navbar-list-item">
          <Link to="/contact">Contacto</Link>
        </li>
      </ul>
      <CartWidget className="navbar-cart" />
    </div>
  );
};

export default NavBar;
