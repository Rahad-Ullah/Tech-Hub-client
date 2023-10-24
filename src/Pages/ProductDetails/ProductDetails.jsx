import { NavLink, useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
    const detailsBrands = useLoaderData()
    const params = useParams().id.split('-');
    const brandName = params[0]
    const id = params[1]

    const detailsBrand = detailsBrands.find(brand => brand.name == brandName)
    const { products} = detailsBrand;
    console.log(detailsBrand)
    
    const product = products.find(product => product.id == id)
    const {name, image, brand, type, price, rating, color, dimension, weight, manufacture_country, warranty, warranty_time} = product;
    console.log(product)

    return (
        <div className="w-full md:w-2/3 lg:w-1/2 mx-auto py-12">
            <div className="card bg-base-100 border-0 md:borde rounded-xl p-6">
                <figure data-aos="zoom-in"><img src={image} alt="image" className=" w-10/12 p-5"/></figure>
                <div data-aos="zoom-in" className="card-body p-5">
                    <h2 className="card-title text-xl md:text-2xl lg:text-3xl">{name}</h2>
                    <p className='font-semibold text-lg text-primary mb-8'>Price: {price} BDT</p>
                    
                    <div className="overflow-x-auto">
                    <table className="table border">
                        {/* head */}
                        <thead>
                        <tr>
                            <th colSpan={2} className="text-center text-zinc-800 text-lg">Specifications</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        <tr>
                            <td className="font-medium">Brand</td>
                            <td className="border-l">{brand}</td>
                        </tr>
                        <tr>
                            <td className="font-medium">Type</td>
                            <td className="border-l">{type}</td>
                        </tr>
                        <tr>
                            <td className="font-medium">Color</td>
                            <td className="border-l">{color}</td>
                        </tr>
                        <tr>
                            <td className="font-medium">Dimension</td>
                            <td className="border-l">{dimension}</td>
                        </tr>
                        <tr>
                            <td className="font-medium">Weight</td>
                            <td className="border-l">{weight}</td>
                        </tr>
                        <tr>
                            <td className="font-medium">Manufacture Country</td>
                            <td className="border-l">{manufacture_country}</td>
                        </tr>
                        <tr>
                            <td className="font-medium">Warranty</td>
                            <td className="border-l">{warranty}</td>
                        </tr>
                        <tr>
                            <td className="font-medium">Warranty Time</td>
                            <td className="border-l">{warranty_time}</td>
                        </tr>
                        <tr>
                            <td className="font-medium">Rating</td>
                            <td className="border-l">{rating}</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className="card-actions justify-center mt-2">
                        <NavLink to={`/products/${brand}-${id}`} className="btn btn-neutral border-0 bg-primary text-white transition duration-300 mt-4">Add to Cart</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;