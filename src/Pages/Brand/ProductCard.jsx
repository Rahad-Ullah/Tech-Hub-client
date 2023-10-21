
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';

const ProductCard = ({product}) => {
    const {id, name, image, brand, type, price, rating} = product;

    return (
        <div className="card bg-base-100 border rounded-xl transition-tranform duration-500 hover:shadow-2xl transform hover:-translate-y-1">
            <figure data-aos="zoom-in"><img src={image} alt="image" className=" h-72 p-5"/></figure>
            <div data-aos="zoom-in" className="card-body p-5">
                <h2 className="card-title text-xl md:text-2xl">{name}</h2>
                <p className='font-medium'>Brand: <span className='font-normal'>{brand}</span></p>
                <p className='font-medium'>Type: <span className='font-normal'>{type}</span></p>
                <p className='font-medium'>Price: <span className='font-normal'>{price} BDT</span></p>
                <p className='font-medium'>Rating: <span className='font-normal'>{rating} BDT</span></p>
                <div className="card-actions grid grid-cols-2 justify-center mt-2">
                    <NavLink to={`/products/${brand}-${id}`} className="btn btn-neutral border-0 bg-primary text-white transition duration-300 w-full">More Details</NavLink>
                    <NavLink to={`/${id}`} className="btn btn-neutral border btn-outline text-primary transition duration-300 w-full hover:bg-primary hover:border-primary">Update </NavLink>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

ProductCard.propTypes = {
    product: PropTypes.object,
}