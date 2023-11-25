import Cart from "./Cart";
import { useCart } from "../../../context/CartContext.jsx";
import { useEffect, useState } from "react";

const CartContainer = () => {
  const {
    cart,
    existingItemCart,
    addToCart,
    subFromCart,
    deleteItem,
    clearCart,
    calculateTotalCart,
  } = useCart();

  console.log("cartContainer render");

  const handleAdd = (item) => {
    const itemStock = existingItemCart(item)
      ? existingItemCart(item).stock
      : item.stock;
    if (1 <= itemStock) {
      const addition = addToCart(1, item);
      return addition;
    } else {
      console.log("No hay suficiente stock disponible");
    }
  };

  const handleSub = (item) => {
    subFromCart(item);
  };

  const handleDelete = (item) => {
    const deletion = deleteItem(item);
    return deletion;
  };

  const handleClear = () => {
    clearCart();
  };

  const handleTotalToPay = () => {
    const total = calculateTotalCart();
    return total;
  };

  return (
    <>
      <Cart
        cartItems={cart}
        handleAdd={handleAdd}
        handleSub={handleSub}
        handleDelete={handleDelete}
        handleClear={handleClear}
        calculateTotalCart={handleTotalToPay}
      />
    </>
  );
};

export default CartContainer;
