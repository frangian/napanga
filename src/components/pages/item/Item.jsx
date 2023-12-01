import "./item.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Button } from "@mui/material";
import Gallery from "../../common/Gallery";
import MobileGallery from "../../common/MobileGallery";
import Description from "../../common/Description";

const Item = ({
  product,
  count,
  addCount,
  subCount,
  addToCart,
  handleStock,
}) => {
  console.log("Item render");

  return (
    <div className="item-container">
      <Gallery />
      <MobileGallery />
      <Description
        product={product}
        onQuant={count}
        onAdd={addCount}
        onRemove={subCount}
        onSetOrderedQuant={addToCart}
      />

      {/* <Card
        sx={{
          maxWidth: 345,
          margin: "auto",
          my: 3,
        }}
      >
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={product.title}
          subheader={`$ ${product.price}`}
        />
        <CardMedia
          component="img"
          height="250"
          image={product.image}
          alt={product.title}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {product.characteristics}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span style={{ fontSize: 17, fontWeight: 500 }}>Capacidad:</span>{" "}
            {product.capacity}
          </Typography>
          <Box
            sx={{
              width: "250px",
              margin: "5px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                width: "120px",
                display: "flex",
                padding: 0,
                outline: "1px solid #2A332D",
                borderRadius: 30,
              }}
            >
              <AddSubButton disabled={count === 0} onClick={subCount}>-</AddSubButton>

              <span
                style={{
                  height: "50px",
                  width: "40px",
                  lineHeight: "300%",
                  textAlign: "center",
                  fontFamily: "Indie Flower",
                }}
              >
                {count}
              </span>
              <AddSubButton onClick={addCount}>+</AddSubButton>
            </Box>
            <Button
              onClick={addToCart}
              sx={{
                height: "50px",
                width: "120px",
                borderRadius: 30,
                lineHeight: 1.1,
                fontSize: 13,
              }}
            >
              Agregar al carrito
            </Button>
          </Box>
          <Typography>Stock Disponible: {handleStock()}</Typography>
        </CardContent>
      </Card> */}
    </div>
  );
};

export default Item;
