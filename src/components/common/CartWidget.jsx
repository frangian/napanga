import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Products from "./Products";

const CartWidget = ({ onShow }) => {
  const {
    cart,
    itemsQuantity,
    calculateTotalCart,
  } = useCart();

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
                <Products
                  key={product.id}
                  product={product}
                  className={true}
                />
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
