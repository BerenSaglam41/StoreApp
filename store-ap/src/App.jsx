import {createBrowserRouter, RouterProvider} from 'react-router'
import MainLayout from './layouts/Main'
import HomePage from './pages/HomePage'
import Products from './pages/Products'
import CartPage from './pages/CartPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import ProductDetails from './pages/ProductDetails'
import ErrorPages from './pages/ErrorPages'
const router = createBrowserRouter(
  [
    { path :'/',
      element:<MainLayout/>,
      children:[
        {index : true,element : <HomePage/>},
        {path : "home",element : <HomePage/>},
        {
          path : "products",
          children : [
            {index : true,element:<Products/>},
            {path : ":id",element:<ProductDetails/>}
          ]
        },
        {path : "cart",element : <CartPage/>},
        {path : "login",element : <LoginPage/>},
        {path : "register",element : <RegisterPage/>},
        {path : "errors",element : <ErrorPages/>},
      ] 
    }
  ]
)

function App() {
  return <RouterProvider router={router}/>
}

export default App
