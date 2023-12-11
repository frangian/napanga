import CartContainer from "../components/pages/cart/CartContainer";
import ContactContainer from "../components/pages/contact/ContactContainer";
import ForgotPassword from "../components/pages/forgotPassword/ForgotPassword";
import HomeContainer from "../components/pages/home/HomeContainer";
import ItemContainer from "../components/pages/item/ItemContainer";
import ItemListContainer from "../components/pages/itemList/ItemListContainer";
import LoginContainer from "../components/pages/login/LoginContainer";
import RegisterContainer from "../components/pages/register/RegisterContainer";

export const routes = [
  {
    id: "home",
    title: "Home",
    type: "pages",
    path: "/",
    Element: HomeContainer,
  },
  {
    id: "products",
    title: "Productos",
    type: "pages",
    path: "/products",
    Element: ItemListContainer,
  },
  {
    id: "category",
    title: "Category",
    type: "link",
    path: "/products/:categoryId",
    Element: ItemListContainer,
  },
  {
    id: "contact",
    title: "Contacto",
    type: "pages",
    path: "/contact",
    Element: ContactContainer,
  },
  {
    id: "item",
    title: "Item",
    type: "link",
    path: "/item/:itemId",
    Element: ItemContainer,
  },
  {
    id: "cart",
    title: "Cart",
    type: "link",
    path: "/cart",
    Element: CartContainer,
  },
  {
    id: "register",
    title: "Register",
    type: "link",
    path: "/register",
    Element: RegisterContainer,
  },
  {
    id: "login",
    title: "Login",
    type: "link",
    path: "/login",
    Element: LoginContainer,
  },
  {
    id: "forgotPassword",
    title: "ForgotPassword",
    type: "link",
    path: "/forgotPassword",
    Element: ForgotPassword,
  },
];
