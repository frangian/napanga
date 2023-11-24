import NavBar from "../navbar/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <div style={{ minHeight: "calc(100vh - 128px )" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
