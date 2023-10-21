import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Brands from "./Brands/Brands";

const Home = () => {
    const brands = useLoaderData()

    return (
        <div className="">
            <Banner></Banner>
            <Brands brands={brands}></Brands>
        </div>
    );
};

export default Home;