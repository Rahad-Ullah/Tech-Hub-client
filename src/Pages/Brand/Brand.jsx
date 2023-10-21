import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const Brand = () => {
    const detailsBrands = useLoaderData()
    const brandName = useParams().name;

    const detailsBrand = detailsBrands.find(brand => brand.name === brandName)
    const {name, images, products} = detailsBrand;

    return (
        <div>
            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
                <h1 className="text-3xl md:text-4xl font-bold text-center py-2 pb-16"><span className="text-primary">Trending</span> Products</h1>
                {
                    products.length > 0
                    ?
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    {
                        products.map(product => <ProductCard 
                            key={product.id}
                            product={product}
                        ></ProductCard>)
                    }
                    </div>
                    :
                    <h1 className="text-center text-3xl text-zinc-600 py-20">No  Available Products</h1>
                }

            </div>
        </div>
    );
};

export default Brand;