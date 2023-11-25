import "./item.css";
import Item from "./Item";
import { productList } from "../../../db/productList.js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../../../context/CartContext.jsx";

const ItemContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState({});
  const [count, setCount] = useState(0);
  const { existingItemCart, eachItemInCartStock, addToCart } = useCart();

console.log("item container render");

  const addCount = () => {
    const itemStock = existingItemCart(item) ? existingItemCart(item).stock : item.stock 
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
    setCount(0)
  };

  const handleStock = () => {
    const itemStock = eachItemInCartStock(item);
    return itemStock !== undefined ? itemStock : item.stock
  };

  useEffect(() => {
    // const fetchData = async () => {
      try {
        // const myPromise = new Promise((resolve, reject) => {
        //   setTimeout(() => {
        //     resolve(productList);
        //   }, 2000);
        // });

        // const response = await myPromise;
        const productById = productList.find((product) => product.id == itemId);

        if (productById) {
          setItem(productById);
        } else {
          console.error(`No se encontró un producto con el ID ${itemId}`);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    // };

    // fetchData();
  }, [itemId]);

  // console.log(item);

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
