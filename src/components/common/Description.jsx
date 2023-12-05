import CartIcon from "../../assets/icons/CartIcon";
import QuantityButton from "./QuantityButton";

const Description = ({
  product,
  count,
  addCount,
  subCount,
  addToCart,
  handleStock
}) => {
  return (
    <section className="description">
      <p className="pre">DECO</p>
      <h1>{product.title}</h1>
      <h2 className="desc">{product.characteristics} </h2>
      <div className="price">
        <div className="main-tag">
          <p>${product.price}.00</p>
          <p>50%</p>
        </div>
        <s>${product.price * 2}.00</s>
      </div>
      <p className="desc">Stock disponible: {handleStock()}</p>
      <div className="buttons">
        <QuantityButton count={count} subCount={subCount} addCount={addCount} />
        <button
          className="add-to-cart"
          onClick={() => {
            addToCart();
          }}
        >
          <CartIcon />
          add to cart
        </button>
      </div>
    </section>
  );
};

export default Description;
