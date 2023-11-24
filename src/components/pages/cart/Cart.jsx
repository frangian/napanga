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
import React from "react";

const Cart = ({ cartItems, calculateTotalCart }) => {

  return (
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
          {cartItems.map((cartItems) => (
            <TableRow
              key={cartItems.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ width: "80px", height: "80px", padding: "8px 0 0 0" }}
              >
                <img
                  src={cartItems.image} // Asegúrate de que cartItems.image contenga la ruta completa de la imagen
                  alt={cartItems.title} // Agrega un atributo alt para accesibilidad
                  style={{ maxWidth: "80px", maxHeight: "80px" }} // Estilo opcional para limitar el tamaño de la imagen
                />
              </TableCell>
              <TableCell align="right">{cartItems.title}</TableCell>
              <TableCell align="right">{cartItems.capacity}</TableCell>
              <TableCell align="right">$ {cartItems.price}</TableCell>
              <TableCell align="right">
                <button onClick={() => handleAdd(cartItems.id)}>
                  +
                </button>
              </TableCell>
              <TableCell align="right">{cartItems.quantity}</TableCell>
              <TableCell align="right">
                <button onClick={() => handleSub(cartItems.id)}>
                  -
                </button>
              </TableCell>
              <TableCell align="right">
              $ {cartItems.price * cartItems.quantity}
              </TableCell>
              <TableCell align="right">
                <button onClick={() => handleDelete(cartItems.id)}>
                  Eliminar
                </button>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={7} align="right">
              <Typography>Total a pagar:</Typography>
            </TableCell>
            <TableCell colSpan={1} align="right">
            $ {calculateTotalCart(cartItems)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Cart;
