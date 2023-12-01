import "./itemList.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const ItemList = ({ id, title, capacity, characteristics, image, price }) => {
  console.log("ItemList render");

  return (
    <>
      <div className="products-container">
        <img src={image} alt={title} className="products-image" />
        <div className="products-details">
          <h2 className="products-name">{title}</h2>
          <p className="products-capacity">Capacidad: {capacity}</p>
          <p className="products-description">{characteristics}</p>
          <p className="products-price">Precio: ${price}</p>
          </div>
        <Link to={`/item/${id}`}>
          <Button sx={{ margin: "10px 50px" }}>Mas información</Button>
          </Link>
      </div>
    </>
  );
};

export default ItemList;
