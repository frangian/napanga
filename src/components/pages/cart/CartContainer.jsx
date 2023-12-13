import Cart from "./Cart";
import { useCart } from "../../../context/CartContext.jsx";
import { useState } from "react";
import { db } from "../../../firebaseConfig.js";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const CartContainer = () => {
  // console.log("cartContainer render");
  const { cart, calculateTotalCart, clearCart } = useCart();
  const navigate = useNavigate();

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

  const handleForm = ({ name, phone, email }) => {
    setBuyer({
      name,
      phone,
      email,
    });
    // setValidSubmit(true);
    // sendOrder();
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
        clearCart();
        navigate("./")
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
