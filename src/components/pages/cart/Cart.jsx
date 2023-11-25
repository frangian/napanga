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
}) => {
  console.log("cart render");

  return (
    <>
    {cartItems.length > 0 ? (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">
              {" "}
              <Typography sx={{ fontSize: "1.4rem" }}>Producto</Typography>
            </TableCell>
            <TableCell align="right">Capacidad</TableCell>
            <TableCell align="right">Precio unidad</TableCell>
            <TableCell align="right">boton "+"</TableCell>
            <TableCell align="right">Cantidad</TableCell>
            <TableCell align="right">boton "-"</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">boton "Eliminar"</TableCell>
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
                sx={{ width: "80px", height: "80px", padding: "8px 0 0 0" }}
              >
                <img
                  src={item.image} // Asegúrate de que item.image contenga la ruta completa de la imagen
                  alt={item.title} // Agrega un atributo alt para accesibilidad
                  style={{ maxWidth: "80px", maxHeight: "80px" }} // Estilo opcional para limitar el tamaño de la imagen
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
                <button onClick={() => handleDelete(item)}>Eliminar</button>
              </TableCell>
            </TableRow>
          ))}
            <TableRow>
              <TableCell colSpan={7} align="right">
                <Typography>Total a pagar:</Typography>
              </TableCell>
              <TableCell colSpan={1} align="right">
                $ {calculateTotalCart()}
              </TableCell>
              <TableCell colSpan={1} align="right">
                <button onClick={() => handleClear()}>Borrar Carrito</button>
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    ) : (
      "carrito vacio"
    )}
    </>

  );
};

export default Cart;
