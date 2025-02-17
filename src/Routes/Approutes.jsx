import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayoutAdmin from '../Layouts/LayoutAdmin'
import Product from '../page/Admin/Product'

const router = createBrowserRouter([
    {
        path: '/',
        // element: <LayoutsAdmin />,
        element: <LayoutAdmin/>,
        children: [
            { index: true, element: <Product/> },
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
