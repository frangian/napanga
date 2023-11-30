import { useCart } from "../../context/CartContext";
import { IconButton } from "@mui/material";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { customTheme } from "../../themeconfig";
import deleteIcon from "../../assets/icons/icon-delete.svg";
import macetaPic from "../../assets/maceta.jpg";
import "../common/allCommon.css";

const CartWidget = ({ onShow }) => {
  console.log("cartwidget render");
  const { cart, itemsQuantity, deleteItem } = useCart();

  // const Bubble = ({ children }) => (
  //   <span
  //     style={{
  //       position: "absolute",
  //       left: 14,
  //       right: 14,
  //       backgroundColor: customTheme.palette.green.light,
  //       width: 16,
  //       height: 14,
  //       borderRadius: 7,
  //       fontFamily: "Roboto",
  //       fontSize: 12,
  //       fontWeight: 500,
  //       textAlign: "center",
  //       color: customTheme.palette.green.dark,
  //     }}
  //   >
  //     {children}
  //   </span>
  // );

  const PRICE = 125;

  return (
    // <div style={{ position: "relative" }}>
    //   <ShoppingCartIcon style={{ color: customTheme.palette.green.light }} />
    //   {itemsQuantity !== 0 ? <Bubble>{itemsQuantity}</Bubble> : ""}
    // </div>
    <section className="cart">
      <div className="head">
        <p>Cart</p>
      </div>
      <hr />
      <div className="cart-content">
        {itemsQuantity ? (
          <>
            {/* <Product itemsQuantity={itemsQuantity} onReset={onReset} /> */}
            <div className="product">
              <img src={macetaPic} alt="product-thumbnail" />
              <div className="info">
                <p>fall limited edition sneakers</p>
                <div className="price">
                  <span> {`$${PRICE.toFixed(2)} x ${itemsQuantity}`} </span>
                  <span> {`$${(PRICE * itemsQuantity).toFixed(2)}`} </span>
                </div>
              </div>
              <IconButton
                className="delete-button"
                size="small"
                disableRipple
                onClick={deleteItem}
              >
                <img src={deleteIcon} alt="delete-item" />
              </IconButton>
            </div>
            <button
              className="checkout"
              onClick={() => {
                // onReset();
                onShow(false);
              }}
            >
              checkout
            </button>
          </>
        ) : (
          <p className="empty">Your Cart Is Empty</p>
        )}
      </div>
    </section>
  );
};

export default CartWidget;
