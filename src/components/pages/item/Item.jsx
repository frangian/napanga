import "./item.css";
import { Backdrop, IconButton } from "@mui/material";
// import { CloseIcon, PreviousIcon, NextIcon, CartIcon, QuantityButton } from "../../../assets/icons";
import CloseIcon from "../../../assets/icons/CloseIcon";
import PreviousIcon from "../../../assets/icons/PreviousIcon";
import NextIcon from "../../../assets/icons/NextIcon";
import CartIcon from "../../../assets/icons/CartIcon";
import QuantityButton from "../../common/QuantityButton";

const Item = ({
  product,
  count,
  addCount,
  subCount,
  addToCart,
  handleStock,
  open,
  currentImage,
  handleClick,
  handleToggle,
  handleClose,
  removeActivatedClass,
  backdropImage,
  currentPassedImageIndex,
  handleClickBG,
  handleIncrementBG,
  handleDecrementBG,
  currentMobileImage,
  handleIncrement,
  handleDecrement,
  THUMBS

}) => {
  console.log("Item render");

  return (
    <div className="item-container">
      <section className="gallery-holder hide-in-mobile">
        <section className="gallery">
          <div className="image">
            <img src={currentImage} alt="product-1" onClick={handleToggle} />
          </div>
          <Backdrop
            className="backdrop"
            sx={{
              color: "#fff",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            open={open}
          >
            <section className="backdrop-content">
              <IconButton
                onClick={handleClose}
                sx={{
                  color: "#fff",
                  bgcolor: "transparent",
                  alignSelf: "flex-end",
                }}
              >
                <CloseIcon fillColor={"#fff"} />
              </IconButton>
              <div className="image">
                <IconButton
                  className="icon-button-prev"
                  disableRipple
                  onClick={() => {
                    handleDecrementBG();
                    removeActivatedClass(document.querySelector(".thumbnails"));
                  }}
                  sx={{
                    height: "42px",
                    width: "42px",
                    bgcolor: "#fff",
                  }}
                >
                  <PreviousIcon />
                </IconButton>
                <IconButton
                  className="icon-button-next"
                  disableRipple
                  onClick={() => {
                    handleIncrementBG();
                    removeActivatedClass(document.querySelector(".thumbnails"));
                  }}
                  sx={{
                    height: "42px",
                    width: "42px",
                    bgcolor: "#fff",
                  }}
                >
                  <NextIcon />
                </IconButton>
                <img
                  src={backdropImage}
                  alt="selected-product"
                  style={{ cursor: "auto" }}
                />
              </div>
              <div className="thumbnails">
                {THUMBS.map((th, index) => {
                  return (
                    <div
                      className="img-holder-backd"
                      key={index}
                      onClick={(e) => {
                        handleClickBG(index);
                        removeActivatedClass(e.currentTarget.parentNode);
                        e.currentTarget.childNodes[0].classList.toggle(
                          "activated"
                        );
                      }}
                    >
                      <div
                        className={`outlay ${
                          index === currentPassedImageIndex && "activated"
                        }`}
                      ></div>
                      <img src={th} alt={`product-${index + 1}`} />
                    </div>
                  );
                })}
              </div>
            </section>
          </Backdrop>
          <div className="thumbnails">
            {THUMBS.map((th, index) => {
              return (
                <div
                  className="img-holder"
                  key={index}
                  onClick={(e) => {
                    handleClick(index);
                    removeActivatedClass(e.currentTarget.parentNode);
                    e.currentTarget.childNodes[0].classList.toggle("activated");
                  }}
                >
                  <div className={`outlay ${index === 0 && "activated"}`}></div>
                  <img src={th} alt={`product-${index + 1}`} />
                </div>
              );
            })}
          </div>
        </section>
      </section>
      <section className="mobile-gallery hide-in-desktop">
        <IconButton
          className="icon-button-prev"
          disableRipple
          onClick={handleDecrement}
          sx={{
            height: "42px",
            width: "42px",
            bgcolor: "#fff",
          }}
        >
          <PreviousIcon />
        </IconButton>
        <img src={currentMobileImage} alt="featured-product" />
        <IconButton
          className="icon-button-next"
          disableRipple
          onClick={handleIncrement}
          sx={{
            height: "42px",
            width: "42px",
            bgcolor: "#fff",
          }}
        >
          <NextIcon />
        </IconButton>
      </section>
      <section className="description">
        <p className="pre">sneaker company</p>
        <h1>fall limited edition sneakers</h1>
        <p className="desc">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer
        </p>
        <div className="price">
          <div className="main-tag">
            <p>$125.00</p>
            <p>50%</p>
          </div>
          <s>$250.00</s>
        </div>
        <div className="buttons">
          <QuantityButton onQuant={count} onRemove={subCount} onAdd={addCount} />
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
    </div>
  );
};

export default Item;
