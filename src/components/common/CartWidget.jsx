import { useCart } from "../../context/CartContext";
import { IconButton } from "@mui/material";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { customTheme } from "../../themeconfig";
import deleteIcon from "../../assets/icons/icon-delete.svg";
import "../common/allCommon.css";
import { Link } from "react-router-dom";

const CartWidget = ({ onShow }) => {
  console.log("cartwidget render");
  const { cart, itemsQuantity, deleteItem } = useCart();

  return (
    <section className="cart">
      <div className="cart-head">
        <p>Cart</p>
      </div>
      <hr />
      <div className="cart-content">
        {itemsQuantity ? (
          <>
            {cart.map((product) => {
              return (
                <div key={product.id} className="product">
                  <img src={product.image} alt="product-thumbnail" />
                  <div className="info">
                    <p>{product.title}</p>
                    <div className="price">
                      <span>
                        {`$${product.price.toFixed(0)} x ${itemsQuantity} = `}
                      </span>
                      <span>
                        {`$${(product.price * itemsQuantity).toFixed(0)}`}
                      </span>
                    </div>
                  </div>
                  <IconButton
                    className="delete-button"
                    size="small"
                    disableRipple
                    onClick={()=>{deleteItem(product)}}
                  >
                    <img src={deleteIcon} alt="delete-item" />
                  </IconButton>
                </div>
              );
            })}
            <Link to={"/cart"}>
              <button
                className="checkout"
                onClick={() => {
                  // onReset();
                  onShow(false);
                }}
              >
                checkout
              </button>
            </Link>
          </>
        ) : (
          <p className="empty">Your Cart Is Empty</p>
        )}
      </div>
    </section>
  );
};

export default CartWidget;
