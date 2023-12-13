import { Box } from "@mui/material";
import NavBar from "../navbar/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: "100%",
          padding: "128px 0 0 0",
          minHeight: "100vh",
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
