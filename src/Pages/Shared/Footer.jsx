import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from '../../assets/TechHub_logo2.jpg'


const Footer = () => {
    return (
    <div className="bg-info-content text-base-300 mt-16">
        <footer className="footer max-w-6xl mx-auto py-16 px-4 md:px-6 lg:px-8">
            <aside>
                <img src={logo} alt="logo" className="w-48"/>
                <p>Events BD Limited<br/>Providing reliable event since 2004</p>
                <nav className="py-2">
                    <div className="grid grid-flow-col gap-4">
                        <Link className="hover:text-rose-500"><FaTwitter className="text-2xl"></FaTwitter></Link>
                        <Link className="hover:text-rose-500"><FaFacebook className="text-2xl"></FaFacebook></Link> 
                        <Link className="hover:text-rose-500"><FaYoutube className="text-2xl"></FaYoutube></Link> 
                    </div>
                </nav>
            </aside> 
            <nav>
                <header className="footer-title">Services</header> 
                <a className="link link-hover hover:text-rose-500">Branding</a> 
                <a className="link link-hover hover:text-rose-500">Design</a> 
                <a className="link link-hover hover:text-rose-500">Marketing</a> 
                <a className="link link-hover hover:text-rose-500">Advertisement</a>
            </nav> 
            <nav>
                <header className="footer-title">Company</header> 
                <a className="link link-hover hover:text-rose-500">About us</a> 
                <a className="link link-hover hover:text-rose-500">Contact</a> 
                <a className="link link-hover hover:text-rose-500">Jobs</a> 
                <a className="link link-hover hover:text-rose-500">Press kit</a>
            </nav> 
            <nav>
                <header className="footer-title">Legal</header> 
                <a className="link link-hover hover:text-rose-500">Terms of use</a> 
                <a className="link link-hover hover:text-rose-500">Privacy policy</a> 
                <a className="link link-hover hover:text-rose-500">Cookie policy</a>
            </nav>
        </footer>
    </div>
    );
};

export default Footer;