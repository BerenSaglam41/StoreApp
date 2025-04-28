import {createBrowserRouter, RouterProvider} from 'react-router'
import HomePage from './pages/HomePage'
import Products from './pages/Products'
import CartPage from './pages/Cart/CartPage'
import RegisterPage from './pages/account/RegisterPage'
import LoginPage from './pages/account/LoginPage'
import ProductDetails from './pages/ProductDetails'
import ErrorPages from './pages/errors/Error'
import ServerError from './pages/errors/ServerError'
import NotFound from './pages/errors/NotFound'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import MainLayout from './layouts/Main'
import Loading from './compoments/Loading'
import { getUser } from './pages/account/accountSlice'
import { getCart } from './pages/Cart/cartSlice'
import CheckOut from './pages/checkout/CheckOut'
import AuthGuard from './auth/AuthGuard.jsx'
import Orders from './pages/orders/Orders.jsx'
export const router = createBrowserRouter(
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
        {element : <AuthGuard/> ,children : [
          {path : "checkout",element : <CheckOut/>},
          {path : "orders",element : <Orders />},
        ]},
        {path : "errors",children :[
            {index : true , element : <ErrorPages/>},
            {path : 'server-error' , element : <ServerError/>},
            {path : 'not-found' , element : <NotFound/>},
          ]
        },
        {path : "*" , element : <NotFound/> }
      ] 
    }
  ]
)

function App() {
  const dispatch = useDispatch()
  const [loading,setLoading] = useState(true);

  const initApp = async () => {
    await dispatch(getUser());
    await dispatch(getCart());
  }

  useEffect(()=>{
    initApp().then(()=>setLoading(false));
  },[]);
  
  if(loading) return <Loading message='Uygulama Başlatılıyor...' size={25} />
  return <RouterProvider router={router}/>
}

export default App
