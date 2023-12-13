import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { customTheme } from "./themeconfig";
import AppRouter from "./router/AppRouter.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={customTheme}>
          <CartProvider>
            <UserProvider>
              <AppRouter />
            </UserProvider>
          </CartProvider>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
