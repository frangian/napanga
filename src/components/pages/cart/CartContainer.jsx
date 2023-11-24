import Cart from "./Cart";
import { useCart } from "../../../context/CartContext.jsx";
import { useEffect, useState } from "react";

const CartContainer = () => {
  const { cart, calculateTotalCart } = useCart();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartToCartItems = () => {
      setCartItems(cart)
    }
    cartToCartItems();
  }, [])

  return (
    <>
      <Cart cartItems={cartItems} calculateTotalCart={calculateTotalCart}/>
    </>
  );
};

export default CartContainer;
