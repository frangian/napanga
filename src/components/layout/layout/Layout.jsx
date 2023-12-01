import { Container } from "@mui/material";
import NavBar from "../navbar/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    < >
      <NavBar />
      <div style={{ minHeight: "calc(100vh - 128px )", padding:"0 24px" }}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
