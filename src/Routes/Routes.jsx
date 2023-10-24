import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Brand from "../Pages/Brand/Brand";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivateRoutes from "./PrivateRoutes";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Products from "../Pages/Products/Products";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch(`/brands.json`)
            },
            {
                path: '/brands/:name',
                element: <Brand></Brand>,
                loader: () => fetch(`/brandsDetail.json`)
            },
            {
                path: '/products/:id',
                element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
                loader: () => fetch(`/brandsDetail.json`)
            }, 
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/add-product',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/products',
                element: <Products></Products>,
                loader: () => fetch(`http://localhost:5000/products`)   
            }
        ]
    }
])

export default router;