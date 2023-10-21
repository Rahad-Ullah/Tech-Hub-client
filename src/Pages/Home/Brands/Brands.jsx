import PropTypes from 'prop-types'
import BrandCard from './BrandCard';

const Brands = ({brands}) => {

    return (
        <div className='max-w-6xl mx-auto py-16 px-4 md:px-6 lg:px-8'>
            <h1 className="text-3xl md:text-4xl font-bold text-center py-2 pb-16"><span className="text-primary">Brands</span> We Provide</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    brands.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)
                }
            </div>
        </div>
    );
};

export default Brands;


Brands.propTypes = {
    brands: PropTypes.array,
}