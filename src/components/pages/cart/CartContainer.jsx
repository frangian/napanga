import Cart from "./Cart";
import { useCart } from "../../../context/CartContext.jsx";
import { useState } from "react";
import { db } from "../../../firebaseConfig.js";
import { collection, addDoc } from "firebase/firestore";

const CartContainer = () => {
  // console.log("cartContainer render");
  const { cart, calculateTotalCart } = useCart();

  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [purchase, setPurchase] = useState({
    buyer: {},
    items: [],
    total: 0,
  });

  // const [formVisible, setFormVisible] = useState(false);
  // const handleAdd = (item) => {
  //   const itemStock = existingItemCart(item)
  //     ? existingItemCart(item).stock
  //     : item.stock;
  //   if (1 <= itemStock) {
  //     const addition = addToCart(1, item);
  //     return addition;
  //   } else {
  //     console.log("No hay suficiente stock disponible");
  //   }
  // };

  // const handleSub = (item) => {
  //   subFromCart(item);
  // };

  // const handleDelete = (item) => {
  //   const deletion = deleteItem(item);
  //   return deletion;
  // };

  // const handleClear = () => {
  //   clearCart();
  // };

  // const handleTotalToPay = () => {
  //   const total = calculateTotalCart();
  //   return total;
  // };

  // const handleOrder = () => {
  //   setFormVisible(true);
  // };

  const handleForm = (userData) => {
    setBuyer({
      name: userData.name,
      phone: userData.phone,
      email: userData.email,
    });
    // setValidSubmit(true);
    sendOrder();
  };

  const sendOrder = () => {
    const order = {
      buyer: buyer,
      items: cart.map((item) => {
        return { id: item.id, title: item.title, price: item.price };
      }),
      total: calculateTotalCart(),
    };
    setPurchase(order);
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then(({ id }) => {
      if (id) {
        alert("Su orden: " + id + " ha sido completada!");
      }
    });
  };

  return (
    <Cart
      cartItems={cart}
      handleForm={handleForm}
      calculateTotalCart={calculateTotalCart}
    />
  );
};

export default CartContainer;
