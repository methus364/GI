import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayoutAdmin from '../Layouts/LayoutAdmin'
import Product from '../page/Admin/Product'
import Coures from '../page/Admin/Coures'

// รวม Router สำหรับเปลี่ยนไปหน้าต่างๆ
const router = createBrowserRouter([
    {
        path: '/admin',
        // element: <LayoutsAdmin />,
        element: <LayoutAdmin/>,
        children: [
            { index: true, element: <Product/> },
            { path:"coures",element: <Coures/>},
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
