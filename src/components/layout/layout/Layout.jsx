import NavBar from "../navbar/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div
        style={{ minHeight: "calc(100vh - 128px )", padding: "128px 0 0 0" }}
      >
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
