import ContactContainer from "../components/pages/contact/ContactContainer";
import HomeContainer from "../components/pages/home/HomeContainer";
import ItemListContainer from "../components/pages/itemList/ItemListContainer";

export const routes = [
  {
    id: "home",
    title: "Home",
    path: "/",
    Element: HomeContainer
  },
  {
    id: "itemListContainer",
    title: "ItemListContainer",
    path: "/itemList",
    Element: ItemListContainer,
  },
  {
    id: "contact",
    title: "Contact",
    path: "/contact",
    Element: ContactContainer,
  },
];
