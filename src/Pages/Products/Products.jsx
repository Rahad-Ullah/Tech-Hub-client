import { useLoaderData } from "react-router-dom";

const Products = () => {
    const products = useLoaderData()
    return (
        <div className="py-16">
            {
                products.map(product => <h1 key={product._id}
                    className="text-3xl text-center"
                    >{product.name}
                </h1>)
            }
        </div>
    );
};

export default Products;