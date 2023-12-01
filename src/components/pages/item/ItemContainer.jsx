import "./item.css";
import Item from "./Item";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../../../context/CartContext.jsx";
import { db } from "../../../firebaseConfig.js";
import { getDoc, doc } from "firebase/firestore";

import prod1 from "../../../assets/Pictures/image-product-1.jpg";
import prod2 from "../../../assets/Pictures/image-product-2.jpg";
import prod3 from "../../../assets/Pictures/image-product-3.jpg";
import prod4 from "../../../assets/Pictures/image-product-4.jpg";

import thumb1 from "../../../assets/Pictures/image-product-1-thumbnail.jpg";
import thumb2 from "../../../assets/Pictures/image-product-2-thumbnail.jpg";
import thumb3 from "../../../assets/Pictures/image-product-3-thumbnail.jpg";
import thumb4 from "../../../assets/Pictures/image-product-4-thumbnail.jpg";

const IMAGES = [prod1, prod2, prod3, prod4];
const THUMBS = [thumb1, thumb2, thumb3, thumb4];


const ItemContainer = () => {
  console.log("ItemContainer render");

  const { itemId } = useParams();
  const [item, setItem] = useState({});
  const { existingItemCart, eachItemInCartStock, addToCart } = useCart();

  console.log(item);

  useEffect(() => {
    console.log("entro al useEffect Inicial");
    try {
      console.log("entro al try del useEffect Inicial");
      const refDoc = doc(db, "productList", itemId);
      console.log("entro al refDoc del useEffect Inicial");

      getDoc(refDoc)
        .then((res) => {
          console.log("algo");
          return res.data()
            ? (setItem({ ...res.data(), id: res.id }), console.log(item))
            : console.error(`No se encontró un producto con el ID ${itemId}`);
        })
        .catch((err) => console.error(err));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [itemId]);

  //------------------------DESCRIPTION----------------------//
  const [count, setCount] = useState(0);

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

  //------------------------DESCRIPTION----------------------//

  //---------------------GALLERY------------------//
  console.log("Gallery render");

  const [currentImage, setCurrentImage] = useState(prod1);
  const [currentPassedImage, setCurrentPassedImage] = useState(prod1);
  const [open, setOpen] = useState(false);

  const handleClick = (index) => {
    console.log("entro al handleClick");
    setCurrentImage(IMAGES[index]);
  };
  const handleToggle = () => {
    setOpen(true);
    console.log(open);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const removeActivatedClass = (parent) => {
    parent.childNodes.forEach((node) => {
      node.childNodes[0].classList.contains("activated") &&
        node.childNodes[0].classList.remove("activated");
    });
  };

  useEffect(() => {
    console.log("entro al useEffect de Gallery");
    setCurrentPassedImage(currentImage);
  }, [currentImage]);

  //---------------------GALLERY END------------------//

  //---------------------BACKDROP GALLERY---------------//
  console.log("BackdropGallery render");

  const [backdropImage, setBackdropImage] = useState(currentPassedImage);
  const [currentPassedImageIndex, setCurrentPassedImageIndex] = useState(1);

  const handleClickBG = (index = null) => {
    setBackdropImage(IMAGES[index]);
    setCurrentPassedImageIndex(index);
  };

  const handleIncrementBG = () => {
    if (currentPassedImageIndex === IMAGES.length - 1) {
      setBackdropImage(IMAGES[0]);
      setCurrentPassedImageIndex(0);
    } else {
      setBackdropImage(IMAGES[currentPassedImageIndex + 1]);
      setCurrentPassedImageIndex(currentPassedImageIndex + 1);
    }
  };

  const handleDecrementBG = () => {
    if (currentPassedImageIndex === 0) {
      setBackdropImage(IMAGES[IMAGES.length - 1]);
      setCurrentPassedImageIndex(IMAGES.length - 1);
    } else {
      setBackdropImage(IMAGES[currentPassedImageIndex - 1]);
      setCurrentPassedImageIndex(currentPassedImageIndex - 1);
    }
  };

  // const removeActivatedClass = (parent) => {
  //   parent.childNodes.forEach((node) => {
  //     node.childNodes[0].classList.contains("activated") &&
  //       node.childNodes[0].classList.remove("activated");
  //   });
  // };

  useEffect(() => {
    console.log("entro al useEffect BackdropGallery");
    setBackdropImage(currentPassedImage);
    IMAGES.forEach((imgg, index) => {
      imgg === currentPassedImage && setCurrentPassedImageIndex(index);
    });
  }, [currentPassedImage]);

  //---------------------BACKDROP GALLERY END---------------//

  //---------------------MOBILE GALLERY-----------------------//
  const [currentMobileImage, setCurrentMobileImage] = useState(prod1);
  const [mobileImageIndex, setMobileImageIndex] = useState(1);

  const handleIncrement = () => {
    if (mobileImageIndex === IMAGES.length - 1) {
      setCurrentMobileImage(IMAGES[0]);
      setMobileImageIndex(0);
    } else {
      setCurrentMobileImage(IMAGES[mobileImageIndex + 1]);
      setMobileImageIndex(mobileImageIndex + 1);
    }
  };

  const handleDecrement = () => {
    if (mobileImageIndex === 0) {
      setCurrentMobileImage(IMAGES[IMAGES.length - 1]);
      setMobileImageIndex(IMAGES.length - 1);
    } else {
      setCurrentMobileImage(IMAGES[mobileImageIndex - 1]);
      setMobileImageIndex(mobileImageIndex - 1);
    }
  };

  //---------------------MOBILE GALLERY END-----------------------//
  if (!item.id) {
    return null; // O puedes mostrar un spinner u otra indicación de carga
  }
  
  return (
    <>
      <Item
        product={item}
        count={count}
        addCount={addCount}
        subCount={subCount}
        addToCart={handleAddToCart}
        handleStock={handleStock}
        //GALLERY
        open={open}
        currentImage={currentImage}
        handleClick={handleClick}
        handleToggle={handleToggle}
        handleClose={handleClose}
        removeActivatedClass={removeActivatedClass}
        //BACKDROPGALLERY
        backdropImage={backdropImage}
        currentPassedImageIndex={currentPassedImageIndex}
        handleClickBG={handleClickBG}
        handleIncrementBG={handleIncrementBG}
        handleDecrementBG={handleDecrementBG}
        //MOBILE GALLERY
        currentMobileImage={currentMobileImage}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        
        
        THUMBS={THUMBS}
      />
    </>
  );
};

export default ItemContainer;
