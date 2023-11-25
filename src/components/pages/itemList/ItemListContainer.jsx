import "./itemList.css";
import ItemList from "./ItemList";
// import { productList } from "../../../db/productList.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig.js";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    try {
      const refCollection = categoryId
        ? query(
            collection(db, "productList"),
            where("category", "==", categoryId)
          )
        : collection(db, "productList");
      getDocs(refCollection)
        .then((res) => {
          const productList = res.docs.map((product) => {
            return { ...product.data(), id: product.id };
          });
          setProducts(productList);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [categoryId]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
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
