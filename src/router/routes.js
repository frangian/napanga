import ContactContainer from "../components/pages/contact/ContactContainer";
import HomeContainer from "../components/pages/home/HomeContainer";
import ItemContainer from "../components/pages/item/ItemContainer";
import ItemListContainer from "../components/pages/itemList/ItemListContainer";

export const routes = [
  {
    id: "home",
    title: "Home",
    type: 'pages',
    path: "/",
    Element: HomeContainer
  },
  {
    id: "products",
    title: "Productos",
    type: 'pages',
    path: "/products",
    Element: ItemListContainer,
  },
  {
    id: "category",
    title: "Category",
    type: 'link',
    path: "/products/:categoryId",
    Element: ItemListContainer,
  },
  {
    id: "contact",
    title: "Contacto",
    type: 'pages',
    path: "/contact",
    Element: ContactContainer,
  },
  {
    id: "item",
    title: "Item",
    type: 'link',
    path: "/item/:itemId",
    Element: ItemContainer,
  }
];
