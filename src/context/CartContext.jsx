import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(sessionStorage.getItem("cart") || "[]")
  );

  console.log("cartContext render");

  const existingItemIndex = (existingCart, item) => {
    const existingItemIndex = existingCart.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    return existingItemIndex;
  };

  const existingItemCart = (item) => {
    const product = cart[existingItemIndex(cart, item)];
    return product;
  };

  const eachItemInCartStock = (item) => {
    const index = existingItemIndex(cart, item);
    if (index !== -1) {
      return cart[index].stock;
    }
  };

  const updateCart = (newCart) => {
    setCart(newCart);
    sessionStorage.setItem("cart", JSON.stringify(newCart));
  };

  const addToCart = (count, item) => {
    console.log("entro al addto.. del contexto");
    // 1. chequeo de que se intente agregar algo al carrito y no 0
    if (count === 0) {
      console.log("no se puede agregar 0 productos al carrito");
      return;
    }
    // 2. chequeo de que haya algo ya en el carrito (dentro hay 2 chequeos mas)
    if (cart.length > 0) {
      console.log("entro al cart.length > 0");
      const updatedCart = [...cart];
      const index = existingItemIndex(updatedCart, item);
      // 3. chequeo de que ya exista en el carrito el producto que quiero agregar
      if (index !== -1) {
        console.log("entro aca");
        updatedCart[index] = {
          ...updatedCart[index],
          quantity: updatedCart[index].quantity + count,
          stock: updatedCart[index].stock - count,
        };
        setCart(updatedCart);
        sessionStorage.setItem("cart", JSON.stringify(updatedCart));
      }
      // 4. chequeo en caso de que no exista el producto, lo agrego al carrito ya existente
      else {
        updatedCart.push({
          ...item,
          stock: item.stock - count,
          quantity: count,
        });
        setCart(updatedCart);
        sessionStorage.setItem("cart", JSON.stringify(updatedCart));
      }
    }
    // 5. chequeo en caso de que no haya nada en el carrito
    else {
      console.log("entro al else del cart.length > 0");
      const updatedCart = [
        { ...item, stock: item.stock - count, quantity: count },
      ];
      setCart(updatedCart);
      sessionStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const subFromCart = (item) => {
    const updatedItem =
      item.quantity > 0
        ? { ...item, quantity: item.quantity - 1, stock: item.stock + 1 }
        : { ...item };

    const newCart = cart.map((objeto) =>
      objeto.id === item.id ? updatedItem : objeto
    );

    setCart(newCart);
    sessionStorage.setItem("cart", JSON.stringify(newCart));
  };

  const deleteItem = (item) => {
    const existingCart = [...cart];
    const newCart = existingCart.filter((objeto) => objeto.id !== item.id);
    setCart(newCart);
    sessionStorage.setItem("cart", JSON.stringify(newCart));
  };

  const clearCart = () => {
    const emptyCart = [];
    setCart(emptyCart);
    sessionStorage.clear();
  };

  const itemsQuantity = cart.reduce((total, cart) => total + cart.quantity, 0);

  const calculateTotalCart = () => {
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
        existingItemCart,
        eachItemInCartStock,
        itemsQuantity,
        updateCart,
        addToCart,
        subFromCart,
        deleteItem,
        clearCart,
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
