import { NavLink, useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const productDetails = useLoaderData()
    const {_id, name, image, brandName, type, price, rating, shortDescription} = productDetails;

    return (
        <div className="w-full md:w-2/3 lg:w-1/2 mx-auto pb-12">
            <div className="card bg-base-100 border-0 md:borde rounded-xl p-6">
                <figure data-aos="zoom-in"><img src={image} alt="image" className=" w-10/12 p-5"/></figure>
                <div data-aos="zoom-in" className="card-body p-5">
                    <h2 className="card-title text-xl md:text-2xl lg:text-3xl">{name}</h2>
                    <p className='font-semibold text-lg text-primary mb-2'>Price: {price} BDT</p>
                    <p className="mb-4"><span className="font-medium">Description:</span> {shortDescription}</p>
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
                                <td className="border-l">{brandName}</td>
                            </tr>
                            <tr>
                                <td className="font-medium">Type</td>
                                <td className="border-l">{type}</td>
                            </tr>
                            <tr>
                                <td className="font-medium">Rating</td>
                                <td className="border-l">{rating}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="card-actions justify-center mt-2">
                        <NavLink to={`/products/${brandName}-${_id}`} className="btn btn-neutral border-0 bg-primary text-white transition duration-300 mt-4">Add to Cart</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;