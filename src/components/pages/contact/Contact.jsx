import { Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const Contact = ({ handleForm }) => {
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      telefono: "",
      email: "",
      mensaje: "",
    },
    onSubmit: (data) => {
      handleForm(data);
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("Campo obligatorio")
        .min(3, "El nombre no puede tener menos de 3 caracteres")
        .matches(/^[A-Za-z ]*$/, "Ingresa solo letras y/o espacios"),
      apellido: Yup.string()
        .required("Campo obligatorio")
        .min(3, "El nombre no puede tener menos de 3 caracteres")
        .matches(/^[A-Za-z ]*$/, "Ingresa solo letras y/o espacios"),
      telefono: Yup.number()
        .typeError("Por favor, ingresa un número válido")
        .required("Campo obligatorio"),
      email: Yup.string()
        .email("El email ingresado no corresponde a un email valido")
        .required("Campo obligatorio"),
      mensaje: Yup.string()
        .required("Campo obligatorio")
        .min(3, "El nombre no puede tener menos de 3 caracteres"),
    }),
    validateOnChange: false,
  });

  return (
    <form
      className="form-container"
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Nombre"
            name="nombre"
            variant="outlined"
            error={errors.nombre ? true : false}
            helperText={errors.nombre}
            onChange={handleChange}
            value={values.nombre}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Apellido"
            name="apellido"
            variant="outlined"
            error={errors.apellido ? true : false}
            helperText={errors.apellido}
            onChange={handleChange}
            value={values.apellido}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Numero de telefono"
            name="telefono"
            variant="outlined"
            error={errors.telefono ? true : false}
            helperText={errors.telefono}
            onChange={handleChange}
            value={values.telefono}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Email"
            name="email"
            variant="outlined"
            error={errors.email ? true : false}
            helperText={errors.email}
            onChange={handleChange}
            value={values.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Mensaje"
            name="mensaje"
            variant="outlined"
            error={errors.mensaje ? true : false}
            helperText={errors.mensaje}
            onChange={handleChange}
            value={values.mensaje}
          />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        type="submit"
        className="submitButton"
        sx={{
          width: "40%",
          marginTop: "1rem",
          fontWeight: "700",
          backgroundColor: "#2A332D",
          color: "#72a184",
        }}
      >
        Enviar
      </Button>
    </form>
  );
};

export default Contact;
