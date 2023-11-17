import "./itemList.css";
import ItemList from "./ItemList";
import { productList } from "../../../db/productList.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const myPromise = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(productList);
          }, 2000);
        });

        const response = await myPromise;

        if (categoryId) {
          const productsFilteredByCategory = response.filter(
            (product) => product.category == categoryId
          );
          setProducts(productsFilteredByCategory);
        } else {
          setProducts(response);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [categoryId, productList]);

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
