import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(sessionStorage.getItem("cart") || "[]")
  );

  const updateCart = (newCart) => {
    setCart(newCart);
    sessionStorage.setItem("cart", JSON.stringify(newCart));
  };

  const addToCart = (count, item) => {
    if (count === 0) {
      console.log("no se puede agregar 0 productos al carrito");
      return;
    }
    if (cart.length > 0) {
      const updatedCart = [...cart];
      const existingItemIndex = updatedCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItemIndex !== -1) {
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          stock: updatedCart[existingItemIndex].stock - count,
          quantity: updatedCart[existingItemIndex].quantity + count,
        };
        setCart(updatedCart);
        sessionStorage.setItem("cart", JSON.stringify(updatedCart));
      } else {
        updatedCart.push({ ...item, quantity: count });
        setCart(updatedCart);
        sessionStorage.setItem("cart", JSON.stringify(updatedCart));
      }
    } else {
      const updatedCart = [{ ...item, quantity: count }];
      setCart(updatedCart);
      sessionStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const eachItemInCartStock = (item) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItemIndex !== -1) {
      return cart[existingItemIndex].stock;
    }
  };

  const itemsQuantity = cart.reduce((total, cart) => total + cart.quantity, 0);

  const calculateTotalCart = (cart) => {
    const total = cart.reduce((accumulator, currentItem) => {
      // Calcula el total para el producto actual (precio * cantidad)
      const productTotal = currentItem.price * currentItem.quantity;
      // Suma el total del producto al acumulador
      return accumulator + productTotal;
    }, 0); // El 0 inicializa el acumulador en 0

    return total;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        eachItemInCartStock,
        itemsQuantity,
        addToCart,
        updateCart,
        calculateTotalCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
