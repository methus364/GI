import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutAdmin from "../Layouts/LayoutAdmin";
import Product from "../page/Admin/Product";
import Coures from "../page/Admin/Coures";
import Addproduct from "../page/Admin/Addproduct";
import Home from "../page/user/Home";
import Login from "../page/user/Login";
import Productinfo from "../page/user/Productinfo";
import Addcoures from "../page/Admin/Addcoures";
import Couresuser from "../page/user/Couresuser";
import Team from "../page/user/Team";
import ProductDeatil from "../page/user/ProductDeatil";
import Addnewcategory from "../page/Admin/Addnewcategory";
import MemberProfile from "../page/user/MemberProfile";

// รวม Router สำหรับเปลี่ยนไปหน้าต่างๆ
const router = createBrowserRouter([
  {
    // router ฝั่ง admin
    path: "/admin",
    element: <LayoutAdmin />,
    children: [
      { index: true, element: <Product /> },
      { path: "coures", element: <Coures /> },
      { path: "addproduct", element: <Addproduct /> },
      { path: "addcoures", element: <Addcoures /> },
      { path: "addcategory", element: <Addnewcategory /> },
    ],
  },
  // router ฝั่ง user
  {
    path: "/",
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "product", element: <Productinfo /> },
      { path: "coures", element: <Couresuser/> },
      { path: "team", element: <Team/> },
      { path: "/product/:id", element: <ProductDeatil/> },
      { path: "coures", element: <Couresuser /> },
      { path: "team", element: <Team /> },
      { path: "team/:id", element: <MemberProfile /> },
    ],
  },
]);

const Approutes = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Approutes;
