import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout/Layout";
import { routes } from "./router/routes.js"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
          {
              routes.map(({id, path, Element})=>(
                <Route key={id} path={path} element={<Element/>}/>
              ))
            }
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
