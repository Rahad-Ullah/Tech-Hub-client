
const Banner = () => {
    return (    
        <div className="w-full h-56 md:h-80 lg:h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(https://media.istockphoto.com/id/1169059275/vector/computer-animation-concept-banner-header.jpg?s=170667a&w=0&k=20&c=Z98fsmKaR81iEHb1rVkKuoXZ8l3NNY-YJrNMcRC6X1k=)`}}>
        <div className="max-w-6xl mx-auto flex justify-end items-center h-full">
            <div className="text-right max-w-xl">
                <h1 className="text-2xl md:text-4xl lg:text-6xl text-white font-bold mb-1 md:mb-4">Elevate Your Corporate Events</h1>
                <h3 className="text-white text-xl md:text-3xl lg:text-4xl font-medium mb-0 md:mb-2">with Expert Management</h3>
                <p className="text-white text-base md:text-base lg:text-xl">Learn more about what we have to offer.</p>
                <button className="btn btn-neutral border-none bg-primary rounded text-white text-sm lg:text-base px-6 group mt-2 md:mt-6">Explore Now <span className="text-xl transition transform group-hover:translate-x-2">&gt;</span></button>
            </div>
        </div>
        </div>
    );
};

export default Banner;