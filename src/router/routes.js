import ContactContainer from "../components/pages/contact/ContactContainer";
import HomeContainer from "../components/pages/home/HomeContainer";
import ItemContainer from "../components/pages/item/ItemContainer";
import ItemListContainer from "../components/pages/itemList/ItemListContainer";

export const routes = [
  {
    id: "home",
    title: "Home",
    path: "/",
    Element: HomeContainer
  },
  {
    id: "products",
    title: "Products",
    path: "/products",
    Element: ItemListContainer,
  },
  {
    id: "category",
    title: "Category",
    path: "/products/:categoryId",
    Element: ItemListContainer,
  },
  {
    id: "contact",
    title: "Contact",
    path: "/contact",
    Element: ContactContainer,
  },
  {
    id: "item",
    title: "Item",
    path: "/item/:itemId",
    Element: ItemContainer,
  }
];
