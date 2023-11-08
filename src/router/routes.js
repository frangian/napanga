import HomeContainer from "../components/pages/home/HomeContainer";
import ItemListContainer from "../components/pages/itemList/ItemListContainer";

export const routes = [
  {
    id: "home",
    // title: "Home",
    path: "/",
    Element: HomeContainer
  },
  {
    id: "itemListContainer",
    title: "ItemListContainer",
    path: "itemListContainer",
    Element: ItemListContainer,
  },
];
