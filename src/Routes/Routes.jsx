import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Brand from "../Pages/Brand/Brand";

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
            }
        ]
    }
])

export default router;