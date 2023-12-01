import { useEffect, useState } from "react";
import BackdropGallery from "./BackdropGallery";

import prod1 from "../../assets/Pictures/image-product-1.jpg";
import prod2 from "../../assets/Pictures/image-product-2.jpg";
import prod3 from "../../assets/Pictures/image-product-3.jpg";
import prod4 from "../../assets/Pictures/image-product-4.jpg";

import thumb1 from "../../assets/Pictures/image-product-1-thumbnail.jpg";
import thumb2 from "../../assets/Pictures/image-product-2-thumbnail.jpg";
import thumb3 from "../../assets/Pictures/image-product-3-thumbnail.jpg";
import thumb4 from "../../assets/Pictures/image-product-4-thumbnail.jpg";

const IMAGES = [prod1, prod2, prod3, prod4];
const THUMBS = [thumb1, thumb2, thumb3, thumb4];

const Gallery = ({ product }) => {
  console.log("Gallery render");

  const [currentImage, setCurrentImage] = useState(prod1);
  const [currentPassedImage, setCurrentPassedImage] = useState(prod1);

  const [open, setOpen] = useState(false);
  const handleClick = (index) => {
    console.log("entro al handleClick");
    setCurrentImage(IMAGES[index]);
  };
  const handleToggle = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const removeActivatedClass = (parent) => {
    parent.childNodes.forEach((node) => {
      node.childNodes[0].classList.contains("activated") &&
        node.childNodes[0].classList.remove("activated");
    });
  };

  useEffect(() => {
    console.log("entro al useEffect de Gallery");
    setCurrentPassedImage(currentImage);
  }, [currentImage, product]);

  return (
    <section className="gallery-holder hide-in-mobile">
      <section className="gallery">
        <div className="image">
          <img src={currentImage} alt="product-1" onClick={handleToggle} />
        </div>
        <BackdropGallery
          handleClose={handleClose}
          open={open}
          currentPassedImage={currentPassedImage}
        />
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
  );
};

export default Gallery;
