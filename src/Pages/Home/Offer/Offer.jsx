import offer_img from '../../../assets/watch.png'

const Offer = () => {
    return (
        <div className=' py-4' style={{background: 'radial-gradient(#ffff, #ffd6d6)'}}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto'>
                <div>
                    <img src={offer_img} alt="" className='p-16'/>
                </div>
                <div>
                    <h2 className='text-3xl font-bold text-primary'><span className=''>30% </span>OFF</h2>
                    <h1 className='text-5xl font-bold text-black my-6'>Smart Watch</h1>
                    <p className='text-zinc-600'>Exclusively Available on Tech Hub</p>
                    <button className="btn btn-neutral border-0 bg-primary text-white transition duration-300 mt-6 rounded-full px-8">Buy Now</button>

                </div>
            </div>
        </div>
    );
};

export default Offer;