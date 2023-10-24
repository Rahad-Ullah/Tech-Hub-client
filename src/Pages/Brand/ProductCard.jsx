
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';

const ProductCard = ({product}) => {
    const {_id, name, image, brandName, type, price, rating} = product;

    return (
        <div className="card bg-base-100 border rounded-xl transition-all duration-300  hover:border-primary">
            <figure data-aos="zoom-in"><img src={image} alt="image" className=" h-72 p-5"/></figure>
            <div data-aos="zoom-in" className="card-body p-8">
                <h2 className="card-title text-xl md:text-2xl">{name}</h2>
                <p className='font-medium'>Brand: <span className='font-normal'>{brandName}</span></p>
                <p className='font-medium'>Type: <span className='font-normal'>{type}</span></p>
                <p className='font-medium'>Price: <span className='font-normal'>{price} BDT</span></p>
                <p className='font-medium'>Rating: <span className='font-normal'>{rating}</span></p>
                <div className="card-actions grid grid-cols-2 justify-center mt-2">
                    <NavLink to={`/product_details/${_id}`} className="btn btn-neutral border-0 bg-primary text-white transition duration-300 w-full">More Details</NavLink>
                    <NavLink to={`/update/${_id}`} className="btn btn-neutral border btn-outline text-primary transition duration-300 w-full hover:bg-primary hover:border-primary">Update </NavLink>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

ProductCard.propTypes = {
    product: PropTypes.object,
}