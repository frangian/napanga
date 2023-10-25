import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <div>
      <h1>Napanga</h1>
      <ul>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Tips y Cuidados</li>
      </ul>
      <CartWidget/>
    </div>
  )
}

export default NavBar