import { Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useUser } from "../../context/UserContext";

const Form = ({ handleForm }) => {
  const { user } = useUser();

  const { handleSubmit, handleChange, values, errors } = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      phone: "",
      email: user ? user.email : "",
      confirmEmail: "",
    },
    onSubmit: (userData) => {
      console.log(userData);
      handleForm(userData);
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Campo obligatorio")
        .min(3, "El nombre no puede tener menos de 3 caracteres")
        .matches(/^[A-Za-z ]*$/, "Ingresa solo letras y/o espacios"),
      phone: Yup.number()
        .required("Campo obligatorio")
        .typeError("Ingresa solo números"),
      email: Yup.string()
        .required("Campo obligatorio")
        .email("Ingresa un email válido"),
      confirmEmail: Yup.string()
        .oneOf([Yup.ref("email"), null], "Los emails deben coincidir")
        .required("Campo obligatorio"),
    }),
    validateOnChange: false,
  });

  return (
    <form
      className="form-container"
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography sx={{ fontSize: "40px", marginBottom: "24px" }}>
        Datos del comprador
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Nombre y Apellido"
            name="name"
            variant="outlined"
            inputProps={{ style: { fontSize: 30 } }}
            InputLabelProps={{ style: { fontSize: 30 } }}
            value={values.name}
            error={errors.name ? true : false}
            helperText={errors.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Numero de telefono"
            name="phone"
            variant="outlined"
            inputProps={{ style: { fontSize: 30 } }}
            InputLabelProps={{ style: { fontSize: 30 } }}
            error={errors.phone ? true : false}
            helperText={errors.phone}
            onChange={handleChange}
            value={values.phone}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Email"
            name="email"
            variant="outlined"
            inputProps={{ style: { fontSize: 30 } }}
            InputLabelProps={{ style: { fontSize: 30 } }}
            error={errors.email ? true : false}
            helperText={errors.email}
            onChange={handleChange}
            value={values.email}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Confirme el Email"
            name="confirmEmail"
            variant="outlined"
            inputProps={{ style: { fontSize: 30 } }}
            InputLabelProps={{ style: { fontSize: 30 } }}
            error={errors.confirmEmail ? true : false}
            helperText={errors.confirmEmail}
            onChange={handleChange}
            value={values.confirmEmail}
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
        Enviar Orden
      </Button>
    </form>
  );
};

export default Form;
