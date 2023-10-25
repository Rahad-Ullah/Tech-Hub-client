import PropTypes from 'prop-types'

const LatestProductCart = ({product}) => {
    const {name, image, price} = product;
    console.log(product)
    return (
        <div className='transform transition-transform duration-500 hover:-translate-y-2 cursor-pointer'>
            <img src={image} alt="product image" className='w-full'/>
            <h2 className='text-lg font-bold text-zinc-700 my-1'>{name}</h2>
            <h3 className='text-sm font-medium text-zinc-800 my-1'>BDT {price}</h3>
        </div>
    );
};


LatestProductCart.propTypes = {
    product: PropTypes.object,
}
export default LatestProductCart;