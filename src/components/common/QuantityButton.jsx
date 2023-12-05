import "./quantityButton.css"
import plus from "../../assets/Pictures/icon-plus.svg";
import minus from "../../assets/Pictures/icon-minus.svg";

const QuantityButton = ({ className, count, subCount, addCount }) => {
  console.log(className);
  const classname = className ? "amount-cartWidget" : "amount"
  console.log(classname);
  return (
    <div className={classname}>
      <button className="minus" onClick={subCount} disabled={count === 0}>
        <img src={minus} alt="icon-minus" />
      </button>
      <p className="count">{count}</p>
      <button className="plus" onClick={addCount} disabled={count === 100}>
        <img src={plus} alt="icon-plus" />
      </button>
    </div>
  );
};

export default QuantityButton;
