import "./item.css";
import Gallery from "../../common/Gallery";
import MobileGallery from "../../common/MobileGallery";
import Description from "../../common/Description";

const Item = ({
  product,
  images,
  count,
  addCount,
  subCount,
  addToCart,
  handleStock,
}) => {
  console.log("Item render");
  console.log(product);

  return (
    <div className="item-container">
      <Gallery images={images}/>
      <MobileGallery />
      <Description
        product={product}
        count={count}
        addCount={addCount}
        subCount={subCount}
        addToCart={addToCart}
        handleStock={handleStock}
      />
    </div>
  );
};

export default Item;
