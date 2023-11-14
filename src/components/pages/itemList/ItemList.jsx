import { Link } from "react-router-dom";
import "./itemList.css";

const ItemList = ({ id, title, capacity, characteristics, image, price }) => {
  return (
    <>
      <div className="products-container">
        <img src={image} alt={title} className="products-image" />
        <div className="products-details">
          <h2 className="products-name">{title}</h2>
          <p className="products-capacity">Capacidad: {capacity}</p>
          <p className="products-description">{characteristics}</p>
          <p className="products-price">Precio: {price}</p>
        </div>
        <Link to={`/item/${id}`}>
          <button style={{ margin: "10px 50px" }}>Mas informacion</button>
        </Link>
      </div>
    </>
  );
};

export default ItemList;
