import "./item.css";
import Item from "./Item";
import data from "../../../db/productList.js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ItemContainer = () => {
  const [item, setItem] = useState({});
  const [count, setCount] = useState(0);
  const { itemId } = useParams();

  const addCount = () => {
    if (count < item.stock) {
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const myPromise = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(data);
          }, 2000);
        });

        const response = await myPromise;
        const productById = response.find((product) => product.id == itemId);

        if (productById) {
          setItem(productById);
        } else {
          console.error(`No se encontró un producto con el ID ${itemId}`);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [itemId]);

  // console.log(item);

  return (
    <>
      <Item
        product={item}
        count={count}
        addCount={addCount}
        subCount={subCount}
      />
    </>
  );
};

export default ItemContainer;
