import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Brands from "./Brands/Brands";
import LatestProducts from "./LatestProducts/LatestProducts";
import Offer from "./Offer/Offer";

const Home = () => {
    const brands = useLoaderData()

    return (
        <div className="">
            <Banner></Banner>
            <Offer></Offer>
            <Brands brands={brands}></Brands>
            <LatestProducts></LatestProducts>
        </div>
    );
};

export default Home;