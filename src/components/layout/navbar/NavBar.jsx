import { Link } from "react-router-dom";
import CartWidget from "../../common/CartWidget";
// import "./navbar.css";
import logo from "../../../assets/logo.png";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { routes } from "../../../router/routes.js";
import { productsCategories } from "../../../db/productList.js";

// const settings = ["Profile", "Cuenta", "Logout"];

const Navbar = () => {
  const routesFilteredByType = routes.filter((route) => route.type === "pages");
  const logoImage = <img src={logo} alt="logo" style={{ width: "120px" }} />;
  const [anchorElMenu, setAnchorElMenu] = useState(null);
  const [anchorElNav, setAnchorElNav] = useState(null);
  // const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorElMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElMenu(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#2a332d" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* ------------------Logo------------------------------- */}
          <Box
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Link to={"/"} style={{ display: "flex" }}>
              {logoImage}
            </Link>
          </Box>

          {/* -------------------menu hamburguesa------------------ */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {routesFilteredByType.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Link
                    to={page.path}
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    {page.title}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* -------------------Logo responsive------------------- */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
          >
            <Link to={"/"} style={{ display: "flex" }}>
              {logoImage}
            </Link>
          </Box>

          {/*--------------------Menu-------------------------------*/}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {routesFilteredByType.map((page) =>
              page.id === "products" ? (
                <Box key={page.id} sx={{ mx: 2, cursor: "pointer" }}>
                  <Typography
                    // size="large"
                    // aria-label="account of current user"
                    aria-controls="menu-appbar"
                    // aria-haspopup="true"
                    onClick={handleOpenMenu}
                    // color="inherit"
                  >
                    {page.title}
                  </Typography>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElMenu}
                    // anchorOrigin={{
                    //   vertical: "bottom",
                    //   horizontal: "left",
                    // }}
                    keepMounted
                    // transformOrigin={{
                    //   vertical: "top",
                    //   horizontal: "left",
                    // }}
                    open={Boolean(anchorElMenu)}
                    onClose={handleCloseMenu}
                    sx={{
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    {productsCategories.map((category) => (
                      <MenuItem key={category} onClick={handleCloseNavMenu}>
                        <Link
                          to={`products/${category}`}
                          style={{
                            textDecoration: "none",
                            color: "black",
                          }}
                        >
                          {category}
                        </Link>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ) : (
                <Typography
                  key={page.id}
                  onClick={handleCloseNavMenu}
                  // sx={{ mx: 2 }}
                >
                  <Link
                    to={page.path}
                    style={{
                      textDecoration: "none",
                      color: "white",
                      display: "block",
                    }}
                  >
                    {page.title}
                  </Link>
                </Typography>
              )
            )}
          </Box>

          {/* ------------------Icono cuenta----------------------- */}
          {/* <Box sx={{ flexGrow: 0, mx:1 }}>
            <Tooltip >
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="/src/assets/logo_maceta.svg"
                  sx={{ width: "20px", height: "auto" }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}

          {/* ------------------Icono carrito---------------------- */}
          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              // onClick={handleOpenUserMenu}
              sx={{ p: 1, color: "white" }}
            >
              <CartWidget />
            </IconButton>
            {/* <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
