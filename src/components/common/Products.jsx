import "./product.css";
import { IconButton } from "@mui/material";
import deleteIcon from "../../assets/icons/icon-delete.svg";
import QuantityButton from "./QuantityButton";
import { useCart } from "../../context/CartContext";

const Products = ({ product, className }) => {
  const { deleteItem, subFromCart, addToCart } = useCart();

  return (
    <div className="product-container">
      <div className="product">
        <img src={product.image} alt="product-thumbnail" />
        <div className="info">
          <p>{product.title}</p>
          <div className="price">
            <span>{`$${product.price.toFixed(0)} x ${
              product.quantity
            } = `}</span>
            <span>{`$${(product.price * product.quantity).toFixed(0)}`}</span>
          </div>
        </div>
        <button
          className="delete-button"
          onClick={() => {
            deleteItem(product);
          }}
        >
          <img src={deleteIcon} alt="delete-item" />
        </button>
      </div>
      <QuantityButton
        className={className}
        count={product.quantity}
        subCount={() => {
          subFromCart(product);
        }}
        addCount={() => addToCart(1, product)}
      />
    </div>
  );
};

export default Products;
