import "./item.css";
import Item from "./Item";
import data from "../../../db/productList.js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ItemContainer = () => {
  const [item, setItem] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    const productById = data.find((product) => product.id == itemId);

    if (productById) {
      setItem(productById);
    } else {
      console.error(`No se encontró un producto con el ID ${itemId}`);
    }
  }, [itemId]);

  console.log(item);

  return (
    <>
      <Item product={item} />
    </>
  );
};

export default ItemContainer;
