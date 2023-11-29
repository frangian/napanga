import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Cart = ({
  cartItems,
  handleAdd,
  handleSub,
  handleDelete,
  handleClear,
  calculateTotalCart,
  formVisible,
  handleOrder,
  handleChange,
  buyer,
  handleSubmit,
}) => {
  console.log("cart render");

  return (
    <>
      {cartItems.length > 0 ? (
        <>
          <TableContainer
            component={Paper}
            sx={{ maxWidth: "1000px", margin: "auto" }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="right">
                    {" "}
                    <Typography sx={{ fontSize: "1.4rem" }}>
                      Producto
                    </Typography>
                  </TableCell>
                  <TableCell align="right">Capacidad</TableCell>
                  <TableCell align="right">Precio unidad</TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">Cantidad</TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">Total</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((item) => (
                  <TableRow
                    key={item.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{
                        width: "80px",
                        height: "80px",
                        padding: "8px 0 0 0",
                      }}
                    >
                      <img
                        src={item.image} 
                        alt={item.title}
                        style={{ maxWidth: "80px", maxHeight: "80px" }}
                      />
                    </TableCell>
                    <TableCell align="right">{item.title}</TableCell>
                    <TableCell align="right">{item.capacity}</TableCell>
                    <TableCell align="right">$ {item.price}</TableCell>
                    <TableCell align="right">
                      <button onClick={() => handleAdd(item)}>+</button>
                    </TableCell>
                    <TableCell align="right">{item.quantity}</TableCell>
                    <TableCell align="right">
                      <button onClick={() => handleSub(item)}>-</button>
                    </TableCell>
                    <TableCell align="right">
                      $ {item.price * item.quantity}
                    </TableCell>
                    <TableCell align="right">
                      <button onClick={() => handleDelete(item)}>
                        Eliminar
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={6} align="right">
                    <button onClick={() => handleClear()}>
                      Borrar Carrito
                    </button>
                  </TableCell>
                  <TableCell colSpan={1} align="right">
                    <Typography>Total a pagar:</Typography>
                  </TableCell>
                  <TableCell colSpan={1} align="right">
                    $ {calculateTotalCart()}
                  </TableCell>
                  <TableCell colSpan={1} align="right">
                    <button onClick={() => handleOrder()}>
                      Realizar Orden
                    </button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          {formVisible && (
            <form
              style={{ maxWidth: "350px", margin: "15px auto" }}
              onSubmit={handleSubmit}
            >
              <label>Nombre y apellido</label>
              <input
                type="text"
                name="name"
                value={buyer.name}
                onChange={handleChange}
                placeholder="Ingrese su nombre completo..."
              />
              <label>Telefono</label>
              <input
                type="number"
                name="phone"
                value={buyer.phone}
                onChange={handleChange}
                placeholder="Ingrese su numero de telefono..."
              />
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={buyer.email}
                onChange={handleChange}
                placeholder="Ingrese su email..."
              />
              <button type="submit">Realizar Compra</button>
            </form>
          )}
        </>
      ) : (
        "carrito vacio"
      )}
    </>
  );
};

export default Cart;
