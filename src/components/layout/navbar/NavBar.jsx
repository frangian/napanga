import CartWidget from "../../common/CartWidget"
// import './navbar.css'


const NavBar = () => {
  return (
    // <div className="navbar-container">
    //   <h1 className="navbar-logo">Napanga</h1>
    //   <ul className="navbar-list">
    //     <li className="navbar-list-item">Inicio</li>
    //     <li className="navbar-list-item">Productos</li>
    //     <li className="navbar-list-item">Tips y Cuidados</li>
    //   </ul>
    //   <CartWidget className="navbar-cart" />
    // </div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Napanga</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Tips y Cuidados</a>
            </li>
          </ul>
        </div>
        <CartWidget  />
      </div>
    </nav>
  )
}

export default NavBar