import { Box, Button, Grid, TextField, Typography } from "@mui/material";

const ForgotPassword = ({ navigate, setEmail, handleSubmit }) => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "40px",
        // backgroundColor: theme.palette.secondary.main,
      }}
    >
      <Typography variant="h5" color={"primary"}>
        ¿Olvidaste tu contraseña?
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          rowSpacing={2}
          // alignItems="center"
          justifyContent={"center"}
        >
          <Grid item xs={10} md={12}>
            <TextField
              type="text"
              variant="outlined"
              label="Email"
              fullWidth
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={10} md={12}>
            <Button type="submit" variant="contained" fullWidth>
              Recuperar
            </Button>
          </Grid>
          <Grid item xs={10} md={12}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              onClick={() => navigate("/login")}
            >
              Regresar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ForgotPassword;
