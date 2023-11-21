import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  palette: {
    primary: {
      main: "#000",
      second: "#FFFFFF",
      navbar: "#F2F3F4",
    },
    secondary: {
      main: "#72A184",
    },
    third: {
      main: "#2A332D",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        size: "large",
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});
