import "./item.css";
import Item from "./Item";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../../../context/CartContext.jsx";
import { db } from "../../../firebaseConfig.js";
import { getDoc, doc } from "firebase/firestore";

const ItemContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState({});
  const [count, setCount] = useState(0);
  const { existingItemCart, eachItemInCartStock, addToCart } = useCart();

  console.log("item container render");

  const addCount = () => {
    const itemStock = existingItemCart(item)
      ? existingItemCart(item).stock
      : item.stock;
    if (count < itemStock) {
      setCount(count + 1);
    } else {
      console.log("No hay suficiente stock disponible");
    }
  };

  const subCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(count, item);
    setCount(0);
  };

  const handleStock = () => {
    const itemStock = eachItemInCartStock(item);
    return itemStock !== undefined ? itemStock : item.stock;
  };

  useEffect(() => {
    try {
      const refDoc = doc(db, "productList", itemId);

      getDoc(refDoc)
        .then((res) => {
          return res.data()
            ? setItem({ ...res.data(), id: res.id })
            : console.error(`No se encontró un producto con el ID ${itemId}`);
        })
        .catch((err) => console.error(err));

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [itemId]);

  return (
    <>
      <Item
        product={item}
        count={count}
        addCount={addCount}
        subCount={subCount}
        addToCart={handleAddToCart}
        handleStock={handleStock}
      />
    </>
  );
};

export default ItemContainer;
