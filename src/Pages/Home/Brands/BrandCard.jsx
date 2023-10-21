import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';


const BrandCard = ({brand}) => {
    const {id, name, image} = brand;
    console.log(brand)
    return (

    );
};

export default BrandCard;


BrandCard.propTypes = {
    brand: PropTypes.object,
}