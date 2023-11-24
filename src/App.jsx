import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { customTheme } from "./themeconfig";
import AppRouter from "./router/AppRouter.jsx";
import { CartProvider } from "./context/CartContext.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={customTheme}>
          <CartProvider>
            <AppRouter />
          </CartProvider>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
