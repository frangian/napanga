import NavBar from "../navbar/NavBar"
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div>
      <NavBar/>
      <div style={{ minHeight: "calc(100vh - 156px - 272px)" }}>
        <Outlet />
      </div>

    </div>
  )
}

export default Layout