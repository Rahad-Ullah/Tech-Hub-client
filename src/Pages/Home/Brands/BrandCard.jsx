import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';


const BrandCard = ({brand}) => {
    const {id, name, image} = brand;
    console.log(brand)
    return (
        <div className="card bg-base-100 border rounded-xl transition-tranform duration-500 hover:shadow-2xl transform hover:-translate-y-1">
            <figure data-aos="zoom-in"><img src={image} alt="image" className="w-full h-56"/></figure>
            <div data-aos="zoom-in" className="card-body p-5">
                <h2 className="text-xl md:text-2xl font-semibold text-center">{name}</h2>
                <div className="card-actions justify-center mt-2">
                    <NavLink to={`/event/${id}`} className="btn btn-neutral border-0 bg-primary text-white transition duration-300 w-full">Learn More</NavLink>
                </div>
            </div>
        </div>
    );
};

export default BrandCard;


BrandCard.propTypes = {
    brand: PropTypes.object,
}