import "./item.css";

const Item = ({ product, count, addCount, subCount }) => {

  return (
    <div className="item-container">
      <img src={product.image} alt={product.title} className="item-image" />
      <div className="item-details">
        <h2 className="item-name">{product.title}</h2>
        <p className="item-capacity">Capacidad: {product.capacity}</p>
        <p className="item-description">{product.characteristics}</p>
        <p className="item-price">Precio: {product.price}</p>
        <p className="item-category">Categoría: {product.category}</p>
        <p className="item-stock">Stock Disponible: {product.stock}</p>
      </div>
      <button onClick={addCount}>+</button>
      <span>{count}</span>
      <button onClick={subCount}>-</button>
    </div>
  );
};

export default Item;
