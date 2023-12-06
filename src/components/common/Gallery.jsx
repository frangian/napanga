import { useEffect, useState } from "react";
import BackdropGallery from "./BackdropGallery";

const Gallery = ({ images }) => {
  // console.log("Gallery render");
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [currentPassedImage, setCurrentPassedImage] = useState(images[0]);

  const [open, setOpen] = useState(false);
  const handleClick = (index) => {
    // console.log("entro al handleClick");
    setCurrentImage(images[index]);
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
    // console.log("entro al useEffect de Gallery");
    setCurrentPassedImage(currentImage);
  }, [currentImage, images]);

  return (
    <section className="gallery-holder hide-in-mobile">
      <section className="gallery">
        <div className="image">
          <img src={currentImage} alt="product-1" onClick={handleToggle} />
        </div>
        <BackdropGallery
          images={images}
          handleClose={handleClose}
          open={open}
          currentPassedImage={currentPassedImage}
        />
        <div className="thumbnails">
          {images.map((th, index) => {
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
