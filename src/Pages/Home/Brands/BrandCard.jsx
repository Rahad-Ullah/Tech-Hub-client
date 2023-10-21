import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';


const BrandCard = ({brand}) => {
    const { name, image} = brand;
    
    return (
        <NavLink to={`/brands/${name}`} className="card bg-base-100 border rounded-xl transition-tranform duration-500 hover:shadow-2xl transform hover:-translate-y-1">
            <figure data-aos="zoom-in"><img src={image} alt="image" className="w-full h-56"/></figure>
            <div data-aos="zoom-in" className="card-body p-5">
                <h2 className="text-xl md:text-2xl font-semibold text-center">{name}</h2>
            </div>
        </NavLink>
    );
};

export default BrandCard;


BrandCard.propTypes = {
    brand: PropTypes.object,
}