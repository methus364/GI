import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayoutAdmin from '../Layouts/LayoutAdmin'
import Product from '../page/Admin/Product'
import Coures from '../page/Admin/Coures'
import Addproduct from '../page/Admin/Addproduct'

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
])

const Approutes = () => {
  return (
    <div>
         <RouterProvider router={router} />
    </div>
  )
}

export default Approutes
