import { Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const Form = ({ handleForm }) => {
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
    },
    onSubmit: (data) => {
      handleForm(data);
    },
    validationSchema: Yup.object({
      name: Yup.string("El nombre debe contener letras unicamente")
        .required("Campo obligatorio")
        .min(3, "El nombre no puede tener menos de 3 caracteres"),
      phone: Yup.number(
        "El telefono debe contener numeros unicamente"
      ).required("Campo obligatorio"),
      email: Yup.string()
        .email("El email ingresado no corresponde a un email valido")
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
      <Typography sx={{fontSize:"40px", marginBottom:"24px"}}>Datos del comprador</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Nombre y Apellido"
            name="name"
            variant="outlined"
            inputProps={{style: {fontSize: 30}}}
            InputLabelProps={{style: {fontSize: 30}}}
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
            inputProps={{style: {fontSize: 30}}}
            InputLabelProps={{style: {fontSize: 30}}}
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
            inputProps={{style: {fontSize: 30}}}
            InputLabelProps={{style: {fontSize: 30}}}
            error={errors.email ? true : false}
            helperText={errors.email}
            onChange={handleChange}
            value={values.email}
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
