import { Link } from "react-router-dom";
import CartWidget from "../../common/CartWidget";
import logo from "../../../assets/logo.png";
import { useEffect, useState } from "react";
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
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { customTheme } from "../../../themeconfig";
import { routes } from "../../../router/routes.js";
import { productsCategories } from "../../../db/productList.js";
import { styled, alpha } from "@mui/material/styles";

// const settings = ["Profile", "Cuenta", "Logout"];

const Navbar = () => {
  console.log('navbar render');
  const routesFilteredByType = routes.filter((route) => route.type === "pages");
  const logoImage = <img src={logo} alt="logo" style={{ width: "120px" }} />;
  const [anchorElNav, setAnchorElNav] = useState(null);
  // const [anchorElUser, setAnchorElUser] = useState(null);

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

  // const calculateTotalItems = () => {
  //   return cart.reduce((total, item) => total + item.quantity, 0);
  // };

  // ----------------------- Search bar config ------------------------//
  const Search = styled("div")(({ theme }) => ({
    height: "40px",
    width: "250px",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
  }));

  const SearchIconWrapper = styled("div")(() => ({
    height: "100%",
    width: "40px",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  }));

  const StyledInputBase = styled(InputBase)(() => ({
    color: customTheme.palette.primary.white,
    height: "100%",
    width: "100%",
    marginLeft: "40px",
  }));
  // ----------------------- fin search bar config ------------------- //

  return (
    <AppBar position="sticky">
      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: customTheme.palette.green.dark,
          width: "100%",
          height: "64px",
          px: 4,
        }}
        disableGutters
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
          disableGutters
        >
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
              maxWidth: "250px",
              display: { xs: "none", md: "flex" },
              justifyContent: "space-around",
              alignItems: "center",
              color: customTheme.palette.green.light,
            }}
          >
            {routesFilteredByType.map((page) => (
              <Typography key={page.id} onClick={handleCloseNavMenu}>
                <Link to={page.path}>{page.title}</Link>
              </Typography>
            ))}
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
            <IconButton >
              <Link to={"/cart"}>
                <CartWidget />
              </Link>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
      <Container
        maxWidth="xl"
        sx={{
          height: "64px",
          backgroundColor: customTheme.palette.green.light,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 4,
        }}
        disableGutters
      >
        {/* ------------------------ categorias --------------------------- */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            // margin: 2,
          }}
        >
          <Typography color={{ color: customTheme.palette.green.dark }}>
            Categorias:{" "}
          </Typography>
          {productsCategories.map((category) => (
            <Typography key={category} sx={{ marginLeft: "15px" }}>
              <Link
                to={category === "Todos" ? "/products" : `products/${category}`}
                style={{ color: customTheme.palette.primary.whiteGrey }}
              >
                {category}
              </Link>
            </Typography>
          ))}
        </Box>

        {/* ------------------------ search bar --------------------------- */}
        <Search>
          <SearchIconWrapper sx={{ cursor: "pointer" }}>
            <SearchIcon sx={{ cursor: "pointer" }} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Container>
    </AppBar>
  );
};

export default Navbar;
