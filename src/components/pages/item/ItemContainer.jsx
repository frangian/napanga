import "./item.css";
import Item from "./Item";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../../../context/CartContext.jsx";
import { db } from "../../../firebaseConfig.js";
import { getDoc, doc } from "firebase/firestore";

const ItemContainer = () => {
  console.log("ItemContainer render");
  const { itemId } = useParams();
  const [item, setItem] = useState({});
  const [images, setImages] = useState([])
  const [count, setCount] = useState(0);
  const { existingItemCart, eachItemInCartStock, addToCart } = useCart();
console.log(images);
  const addCount = () => {
    const itemStock = existingItemCart(item)
      ? existingItemCart(item).stock
      : item.stock;
    if (count < itemStock) {
      setCount(count + 1);
    } else {
      console.log("No hay suficiente stock disponible");
      alert("No hay suficiente stock disponible");
    }
  };

  const subCount = () => {
    setCount(count - 1);
  };

  const handleAddToCart = () => {
    if (count === 0) {
      console.log("no se puede agregar 0 productos al carrito");
      alert("No se agrego ningun producto al carrito");
      return;
    }
    addToCart(count, item);
    setCount(0);
  };

  const handleStock = () => {
    const itemStock = eachItemInCartStock(item);
    return itemStock !== undefined ? itemStock : item.stock;
  };

  const handleImages = (images) => {
    setImages(images.map((img)=>img.imageUrl))
  }

  useEffect(() => {
    console.log("entro al useEffect de ItemContainer");
    try {
      const refDoc = doc(db, "productList", itemId);

      getDoc(refDoc)
        .then((res) => {
          return res.data()
            ? (setItem({ ...res.data(), id: res.id }), handleImages(res.data().images))
            : console.error(`No se encontró un producto con el ID ${itemId}`);
        })
        .catch((err) => console.error(err));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [itemId]);

  if (!item.id) {
    return null; // O puedes mostrar un spinner u otra indicación de carga
  }
  console.log(item);
  return (
    <>
      <Item
        product={item}
        images={images}
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
