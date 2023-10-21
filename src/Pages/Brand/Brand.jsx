import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const Brand = () => {
    const detailsBrands = useLoaderData()
    const brandName = useParams().name;

    const detailsBrand = detailsBrands.find(brand => brand.name === brandName)
    const {name, images, products} = detailsBrand;

    return (
        <div>
            <div>
            <div className="carousel w-full">
            {/* <!-- Slide 1 --> */}
            <div id="slide1"
                className="carousel-item relative w-full bg-gradient-to-b from-[#121212] to-[#121212ce] rounded-lg h-56 md:h-auto">
                <img src={images.image_2} className="w-full " />
                <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle bg-[#121212] border-0 text-white">❮</a>

                    <a href="#slide2" className="btn btn-circle bg-[#121212] border-0 text-white">❯</a>
                </div>
            </div>

            {/* <!-- Slide 2 --> */}
            <div id="slide2"
                className="carousel-item relative w-full bg-gradient-to-r from-[#c7541f12] to-[#ffffff01] rounded-lg h-56 md:h-auto">

                <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle bg-[#121212] border-0 text-white">❮</a>
                    <div className="flex flex-col justify-evenly items-center md:flex-row gap-5">
                        <div className="text-left text-zinc-900 max-w-screen-sm lg:relative top-[4vw] ">
                            <h2 className="text-2xl md:text-5xl xl:text-6xl font-extrabold leading-tight mb-1 md:mb-4">Infinite Power, Limitless Possibilities</h2>
                            <p className="text-base md:text-xl font-normal mb-4 md:mb-8">Unleash Your World with Modern Latest Phones</p>
                        </div>
                        <img src={images.image_1} className="w-10/12 md:w-1/3 hidden md:block"/>
                    </div>
                    <a href="#slide3" className="btn btn-circle bg-[#121212] border-0 text-white">❯</a>
                </div>
            </div>
            
            {/* <!-- Slide 3 --> */}
            <div id="slide3"
                className="carousel-item relative w-full bg-gradient-to-b from-[#121212] to-[#121212ce] rounded-lg h-56 md:h-auto">
                <img src={images.image_3} className="w-full " />
                <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle bg-[#121212] border-0 text-white">❮</a>

                    <a href="#slide1" className="btn btn-circle bg-[#121212] border-0 text-white">❯</a>
                </div>
            </div>
        </div>
            </div>
            <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
                <h1 className="text-3xl md:text-4xl font-bold text-center py-16 pb-24"><span className="text-primary">Trending</span> Products</h1>
                {
                    products.length > 0
                    ?
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    {
                        products.map(product => <ProductCard 
                            key={product.id}
                            product={product}
                        ></ProductCard>)
                    }
                    </div>
                    :
                    <h1 className="text-center text-3xl text-zinc-600 py-20">No  Available Products</h1>
                }

            </div>
        </div>
    );
};

export default Brand;