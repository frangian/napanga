import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../../context/CartContext"

const CartWidget = ( ) => {
  const { itemsQuantity } = useCart();
   
  return (
    <div style={{ position: "relative" }}>
      <ShoppingCartIcon style={{ color: "#72A184" }} />
      <span
        style={{
          position: "absolute",
          left: 14,
          right: 14,
          backgroundColor: "#72A184",
          width: 16,
          height: 14,
          borderRadius: 7,
          fontFamily: "Roboto",
          fontSize: 12,
          fontWeight: 500,
          textAlign: "center",
          color: "#2A332D",
        }}
      >
        {itemsQuantity}
      </span>
    </div>
  );
};

export default CartWidget;
