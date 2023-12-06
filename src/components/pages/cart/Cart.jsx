import "./cart.css";
import Form from "../../common/Form";
import Products from "../../common/Products";
import { Grid } from "@mui/material";

const Cart = ({ cartItems, calculateTotalCart, handleForm }) => {
  // console.log("cart render");

  return (
    <>
      <Grid container spacing={3} padding={7}>
        <Grid item xs={12} md={7} sx={{ marginRight: "24px" }}>
          <Form handleForm={handleForm} />
        </Grid>
        <Grid item xs={12} md={4} sx={{ borderLeft: "1px solid gray" }}>
          <div>
            {cartItems.map((product) => {
              return <Products key={product.id} product={product} />;
            })}
            <hr/>
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
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Cart;
