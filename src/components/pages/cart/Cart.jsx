import "./cart.css";
import Form from "../../common/Form";
import Products from "../../common/Products";
import { Box, Grid } from "@mui/material";

const Cart = ({ cartItems, calculateTotalCart, handleForm }) => {
  // console.log("cart render");

  return (
    <>
      <Grid container padding={3} margin={0}>
        <Grid item xs={12} md={8} xl={9} padding={3}>
          <Form handleForm={handleForm} />
        </Grid>
        <Grid
          item
          xs={8}
          md={4}
          xl={3}
          padding={3}
          sx={{ borderLeft: "1px solid gray" }}
        >
          <div className="product-content">
            {cartItems.map((product) => {
              return <Products key={product.id} product={product} />;
            })}
          </div>
          <Grid container rowSpacing={1} sx={{ marginTop: 1 }}>
            <Grid item xs={7} className="grid-total-producto">
              <p className="total">Subtotal: </p>
            </Grid>
            <Grid item xs={5}>
              <span className="valor-total">
                ${calculateTotalCart().toFixed()}
              </span>
            </Grid>
            <Grid item xs={7} className="grid-total-producto">
              <p className="total">Costo de envio:</p>
            </Grid>
            <Grid item xs={5}>
              <span className="valor-total">Gratis</span>
            </Grid>
            <Grid item xs={7} className="grid-total-producto">
              <p className="total">Total: </p>
            </Grid>
            <Grid item xs={5}>
              <span className="valor-total">
                ${calculateTotalCart().toFixed()}
              </span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Cart;
