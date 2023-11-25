import { useCart } from "../../context/CartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { customTheme } from "../../themeconfig";

const CartWidget = () => {
  console.log("cartwidget render");
  const { itemsQuantity } = useCart();

  const Bubble = ({ children }) => (
    <span
      style={{
        position: "absolute",
        left: 14,
        right: 14,
        backgroundColor: customTheme.palette.green.light,
        width: 16,
        height: 14,
        borderRadius: 7,
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: 500,
        textAlign: "center",
        color: customTheme.palette.green.dark,
      }}
    >
      {children}
    </span>
  );

  return (
    <div style={{ position: "relative" }}>
      <ShoppingCartIcon style={{ color: customTheme.palette.green.light }} />
      {itemsQuantity !== 0 ? <Bubble>{itemsQuantity}</Bubble> : ""}
    </div>
  );
};

export default CartWidget;
