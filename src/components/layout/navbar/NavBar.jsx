import "./navbar.css";
import { routes } from "../../../router/routes.js";
import { Link } from "react-router-dom";
import CartWidget from "../../common/CartWidget";
import logo from "../../../assets/logo.png";
import { useEffect, useRef, useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  InputBase,
  Badge,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { customTheme } from "../../../themeconfig";
import { db } from "../../../firebaseConfig.js";
import { getDocs, collection } from "firebase/firestore";
import { useCart } from "../../../context/CartContext.jsx";

const Navbar = () => {
  console.log("navbar render");
  const routesFilteredByType = routes.filter((route) => route.type === "pages");
  const logoImage = <img src={logo} alt="logo" style={{ width: "120px" }} />;
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [categories, setCategories] = useState([]);
  // CartWidget:
  const [showCart, setShowCart] = useState(false);
  const { itemsQuantity } = useCart();
  const iconButtonRef = useRef(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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

  useEffect(() => {
    const handleClick = (event) => {
      toggleCartVisibility()
      // Evitar que se propague el clic fuera del IconButton
      event.stopPropagation();
    };

    const handleDocumentClick = () => {
      setShowCart(false);
    };

    const iconButtonElement = iconButtonRef.current;

    if (iconButtonElement) {
      iconButtonElement.addEventListener('click', handleClick);
    }

    document.addEventListener('click', handleDocumentClick);

  }, []); // Solo se ejecuta al montar/desmontar el componente

const toggleCartVisibility = () => {
  setShowCart((prev) => !prev);
};
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
              {logoImage}
            </Link>
          </Box>

          {/*--------------------Menu-------------------------------*/}
          <Box
            sx={{
              width: "250px",
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

          {/* ------------------Icono carrito---------------------- */}
          <div className="icono-carrito">
            <IconButton
            id="iconButton"
              ref={iconButtonRef}
              disableRipple
              // onClick={() => {
              //   setShowCart(!showCart);
              // }}
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
            {showCart && <CartWidget onShow={setShowCart} />}
          </div>
        </section>

        <section
          className="nav-section"
          style={{
            backgroundColor: customTheme.palette.green.light,
          }}
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
            {categories.map((category) => (
              <Typography key={category} sx={{ marginLeft: "15px" }}>
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
