import './itemList.css'
import ItemList from "./ItemList";
import data from "../../../db/productList.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      const productsFilteredByCategory = data.filter(
        (product) => product.category === categoryId
      );

      // console.log({ data, productsFilteredByCategory })
      setProducts(productsFilteredByCategory);
    } else {
      setProducts(data);
      // console.log( data );
    }
  }, [categoryId]);

  return (
    <div className="products">
      {products.map((eachProduct) => (
        <ItemList
          key={eachProduct.id}
          id={eachProduct.id}
          title={eachProduct.title}
          capacity={eachProduct.capacity}
          image={eachProduct.image}
          characteristics={eachProduct.characteristics}
          price={eachProduct.price}
        />
      ))}
    </div>
  );
};

export default ItemListContainer;
