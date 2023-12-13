import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  palette: {
    primary: {
      main: "#2A332D",
      white: "#FFF",
      black: "#000",
      whiteGrey: "#F2F3F4",
    },
    green: {
      light: "#72A184",
      dark: "#2A332D"
    },
    button: {
      main: "#2A332D",
    },
  },
  typography: {
    fontFamily: "Indie Flower",
    color: "#2a332d",
    // fontSize: 20,
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        size: "large",
      },
      styleOverrides: {
        root: {
          background: "#2A332D",
          border: 0,
          borderRadius: 3,
          boxShadow: "0 3px 5px 2px rgba(#FFFFFF .3)",
          color: "#72A184",
          height: 48,
          padding: "20px",
        },
      },
    },
  },
});
