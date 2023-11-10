import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faShoppingCart} />
      <span style={{ color: 'white' }}> 0</span>
    </div>
  );
};

export default CartWidget;
