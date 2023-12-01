import { useCart } from "../../context/CartContext";
import { IconButton } from "@mui/material";
import deleteIcon from "../../assets/icons/icon-delete.svg";
import { Link } from "react-router-dom";

const CartWidget = ({ onShow }) => {
  console.log("cartwidget render");
  const { cart, itemsQuantity, deleteItem, calculateTotalCart } = useCart();

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
                        {`$${product.price.toFixed(0)} x ${
                          product.quantity
                        } = `}
                      </span>
                      <span>
                        {`$${(product.price * product.quantity).toFixed(0)}`}
                      </span>
                    </div>
                  </div>
                  <IconButton
                    className="delete-button"
                    size="small"
                    disableRipple
                    onClick={() => {
                      deleteItem(product);
                    }}
                  >
                    <img src={deleteIcon} alt="delete-item" />
                  </IconButton>
                </div>
              );
            })}
            <p className="total">
              Total a pagar:{" "}
              <span className="valor-total">
                ${calculateTotalCart().toFixed()}
              </span>
            </p>
            <Link to={"/cart"}>
              <button
                className="checkout"
                onClick={() => {
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
