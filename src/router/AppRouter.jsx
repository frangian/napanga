import { routes } from "../router/routes.js"
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/layout/layout/Layout'

const AppRouter = () => {
  return (
    <Routes>
    <Route element={<Layout/>}>
    {
        routes.map(({id, path, Element})=>(
          <Route key={id} path={path} element={<Element/>}/>
        ))
      }
    </Route>
  </Routes>
)
}

export default AppRouter