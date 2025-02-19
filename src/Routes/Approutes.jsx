import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayoutAdmin from '../Layouts/LayoutAdmin'
import Product from '../page/Admin/Product'
import Coures from '../page/Admin/Coures'
import Addproduct from '../page/Admin/Addproduct'
import Home from '../page/user/Home'
import Login from '../page/user/Login'
import Productinfo from '../page/user/Productinfo'

// รวม Router สำหรับเปลี่ยนไปหน้าต่างๆ
const router = createBrowserRouter([
    {
      // router ฝั่ง admin
        path: '/admin',
        element: <LayoutAdmin/>,
        children: [
            { index: true, element: <Product/> },
            { path:"coures",element: <Coures/>},
            { path:"addproduct",element: <Addproduct/>},
        ]
    },
    // router ฝั่ง user (ยังไม่ทำ)
    {
        path: '/',
        children: [
            { index: true, element: <Home/> },
            { path:"login",element: <Login/>},
            { path:"product",element: <Productinfo/>},
        ]
    },
])

const Approutes = () => {
  return (
    <div>
         <RouterProvider router={router} />
    </div>
  )
}

export default Approutes
