import "./navbar.css";
import { routes } from "../../../router/routes.js";
import { Link } from "react-router-dom";
import CartWidget from "../../common/CartWidget";
import logo from "../../../assets/logo.png";
import avatar from "../../../assets/Pictures/image-avatar.png";
import { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  InputBase,
  Badge,
  Tooltip,
  Avatar,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { customTheme } from "../../../themeconfig";
import { db } from "../../../firebaseConfig.js";
import { getDocs, collection } from "firebase/firestore";
import { useCart } from "../../../context/CartContext.jsx";
import { useUser } from "../../../context/UserContext.jsx";

const Navbar = () => {
  // console.log("navbar render");
  const routesFilteredByType = routes.filter((route) => route.type === "pages");
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [categories, setCategories] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const { itemsQuantity } = useCart();
  const { user, logout } = useUser();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    logout();
    handleCloseUserMenu();
  };
  // ----------------------- Search bar config ------------------------//
  // const Search = styled("div")(({ theme }) => ({
  //   height: "40px",
  //   width: "250px",
  //   position: "relative",
  //   borderRadius: theme.shape.borderRadius,
  //   backgroundColor: alpha(theme.palette.common.white, 0.15),
  //   "&:hover": {
  //     backgroundColor: alpha(theme.palette.common.white, 0.25),
  //   },
  // }));

  // const SearchIconWrapper = styled("div")(() => ({
  //   height: "100%",
  //   width: "40px",
  //   position: "absolute",
  //   pointerEvents: "none",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   cursor: "pointer",
  // }));

  // const StyledInputBase = styled(InputBase)(() => ({
  //   color: customTheme.palette.primary.white,
  //   height: "100%",
  //   width: "100%",
  //   marginLeft: "40px",
  // }));
  // ----------------------- fin search bar config ------------------- //

  useEffect(() => {
    try {
      const refCollection = collection(db, "productList");
      getDocs(refCollection)
        .then((res) => {
          const categoryList = [
            ...new Set([
              "Todos",
              ...res.docs.map((product) => product.data().category),
            ]),
          ];
          setCategories(categoryList);
        })
        .catch();
    } catch (err) {
      console.error(err);
    }
  }, []);

  // -------------------------------------------------------

  // useEffect(() => {
  //   const handleClick = (event) => {
  //     toggleCartVisibility();
  //     // Evitar que se propague el clic fuera del IconButton
  //     event.stopPropagation();
  //   };

  //   const handleDocumentClick = () => {
  //     setShowCart(false);
  //   };

  //   const iconButtonElement = iconButtonRef.current;

  //   if (iconButtonElement) {
  //     iconButtonElement.addEventListener("click", handleClick);
  //   }

  //   document.addEventListener("click", handleDocumentClick);
  // }, []); // Solo se ejecuta al montar/desmontar el componente

  // const toggleCartVisibility = () => {
  //   setShowCart((prev) => !prev);
  // };
  // -------------------------------------------------------

  return (
    <header>
      <nav>
        <section
          className="nav-section"
          style={{
            backgroundColor: customTheme.palette.green.dark,
            position: "relative",
          }}
        >
          {/* -------------------menu hamburguesa------------------ */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
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

          {/* ------------------Logo------------------------------- */}
          <Box
            sx={{
              display: { xs: "flex", md: "flex" },
            }}
          >
            <Link to={"/"} style={{ display: "flex" }}>
              <img
                src={logo}
                alt="logo"
                style={{ width: "190px", height: "55px" }}
              />
            </Link>
          </Box>

          {/*--------------------Menu-------------------------------*/}
          <Box
            sx={{
              width: "350px",
              display: { xs: "none", md: "flex" },
              justifyContent: "space-around",
              alignItems: "center",
              color: customTheme.palette.green.light,
            }}
          >
            {routesFilteredByType.map((page) => (
              <Typography
                key={page.id}
                variant="h5"
                onClick={handleCloseNavMenu}
              >
                <Link to={page.path}>{page.title}</Link>
              </Typography>
            ))}
          </Box>

          {/* ------------------Iconos----------------------------- */}
          <Box sx={{ display: "flex", gap: "20px" }}>
            {!user ? (
              <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <Typography variant="h5" color={"#72A184"}>
                  <Link to={"/register"}>Registrate</Link>
                </Typography>
                <Typography variant="h5" color={"#72A184"}>
                  <Link to={"/login"}>Iniciar Sesion</Link>
                </Typography>
              </Box>
            ) : (
              <Box className="icono-perfil">
                {/* <Tooltip title="Open settings"> */}
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={avatar} />
                </IconButton>
                {/* </Tooltip> */}
                <Menu
                  sx={{
                    mt: "45px",
                    "& .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper ":
                      {
                        backgroundColor: "#2a332d",
                        boxShadow: "1px 7px 20px -7px #72a184",
                        borderRadius: "7px",
                        mt: "13px",
                      },
                    "& .css-6hp17o-MuiList-root-MuiMenu-list": {
                      p: 0,
                    },
                  }}
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
                  <MenuItem sx={{ borderBottom: "1px solid white" }}>
                    <Typography
                      sx={{
                        fontSize: "25px",
                        fontWeight: "700",
                        p: "12px 24px",
                        color: "#72a184",
                      }}
                    >
                      Perfil
                    </Typography>
                  </MenuItem>
                  <MenuItem sx={{}} onClick={handleLogout}>
                    <Typography
                      sx={{
                        fontSize: "25px",
                        p: "12px 24px",
                        color: "#72a184",
                      }}
                    >
                      Cerrar sesion
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
            )}
            <Box className="icono-carrito">
              <IconButton
                id="iconButton"
                disableRipple
                onClick={() => {
                  setShowCart(!showCart);
                }}
                sx={{ transition: "none" }}
              >
                <Badge
                  invisible={itemsQuantity === 0}
                  badgeContent={itemsQuantity}
                  variant="standard"
                  sx={{
                    "& .css-mbpko5-MuiBadge-badge ": {
                      fontFamily: "Roboto",
                      fontSize: "15px",
                      fontWeight: 700,
                    },
                  }}
                >
                  <ShoppingCartIcon
                    style={{ color: customTheme.palette.green.light }}
                  />
                </Badge>
              </IconButton>
              {showCart && <CartWidget />}
            </Box>
          </Box>
        </section>

        <section
          className="nav-section"
          style={{
            backgroundColor: customTheme.palette.green.light,
            height:"50px"
          }}
        >
          {/* ------------------------ categorias --------------------------- */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              // margin: 2,
            }}
          >
            <Typography
              color={{ color: customTheme.palette.green.dark }}
              sx={{ fontSize: "21px" }}
            >
              Categorias:{" "}
            </Typography>
            {categories.map((category) => (
              <Typography
                key={category}
                sx={{ marginLeft: "15px", fontSize: "21px" }}
              >
                <Link
                  to={
                    category === "Todos" ? "/products" : `products/${category}`
                  }
                  style={{ color: customTheme.palette.primary.whiteGrey }}
                >
                  {category}
                </Link>
              </Typography>
            ))}
          </Box>

          {/* ------------------------ search bar --------------------------- */}
          {/* <Search>
            <SearchIconWrapper sx={{ cursor: "pointer" }}>
              <SearchIcon sx={{ cursor: "pointer" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search> */}
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
