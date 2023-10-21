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
            <div className="card bg-base-100 border-0 md:border rounded-xl p-6">
                <figure data-aos="zoom-in"><img src={image} alt="image" className=" w-10/12 p-5"/></figure>
                <div data-aos="zoom-in" className="card-body p-5">
                    <h2 className="card-title text-xl md:text-2xl lg:text-3xl">{name}</h2>
                    <p className='font-semibold text-lg text-primary'>Price: {price} BDT</p>
                    <p className='font-medium'>Brand: <span className='font-normal'>{brand}</span></p>
                    <p className='font-medium'>Type: <span className='font-normal'>{type}</span></p>
                    <p className='font-medium'>Color: <span className='font-normal'>{color}</span></p>
                    <p className='font-medium'>Dimension: <span className='font-normal'>{dimension}</span></p>
                    <p className='font-medium'>Weight: <span className='font-normal'>{weight}</span></p>
                    <p className='font-medium'>Manufacture Country: <span className='font-normal'>{manufacture_country}</span></p>
                    <p className='font-medium'>Warranty: <span className='font-normal'>{warranty}</span></p>
                    <p className='font-medium'>Warranty Time: <span className='font-normal'>{warranty_time} Month</span></p>
                    <p className='font-medium'>Rating: <span className='font-normal'>{rating} BDT</span></p>
                    <div className="card-actions justify-start mt-2">
                        <NavLink to={`/products/${brand}-${id}`} className="btn btn-neutral border-0 bg-primary text-white transition duration-300">Add to Cart</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;