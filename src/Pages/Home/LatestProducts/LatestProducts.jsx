import { useEffect, useState } from "react";
import LatestProductCart from "./LatestProductCart";

const LatestProducts = () => {

    const [products, setProducts] = useState([])

    useEffect(() =>{
        fetch(`http://localhost:5000/products/Samsung`)
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    }
    ,[])
    
    return (
        <div className="bg-red-100 py-24">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-center py-2 pb-16"><span className="text-primary">Latest</span> Products</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {
                        products.map(product => <LatestProductCart 
                            key={product._id}
                            product={product}
                            ></LatestProductCart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default LatestProducts;