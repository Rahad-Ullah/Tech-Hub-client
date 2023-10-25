import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Brand from "../Pages/Brand/Brand";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Products from "../Pages/Products/Products";
import Update from "../Pages/Update/Update";
import Cart from "../Pages/Cart/Cart";
import PrivateRoutes from "./PrivateRoutes";

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
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.name}`)
            },
            {
                path: '/product_details/:id',
                element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/product_details/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <PrivateRoutes><Update></Update></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/product_details/${params.id}`)
            },
            {
                path: '/my-cart', 
                element: <PrivateRoutes><Cart></Cart></PrivateRoutes>,
                loader: () => fetch(`http://localhost:5000/cart`)
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
                element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
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