import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/TechHub_logo2.jpg'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import user_logo from '../../assets/user_logo.png'

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext)
  
    const handleLogOut = () =>{
      logOut();
    }

    const navLinks = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/add-product"}>Add Product</NavLink></li>
        <li><NavLink to={"/my-cart"}>My Cart</NavLink></li>
        <li><NavLink to={"/login"}>Login</NavLink></li>
    </>
    
    return (
    <div>
        <div className="navbar py-6 max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navLinks}
                </ul>
            </div>
            <a href="/" className="text-xl md:text-3xl font-serif font-bold"><img src={logo} alt="logo" className="w-48"/> </a>
            </div>
            <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                    {navLinks}
            </ul>
            </div>
            <div className="navbar-end gap-2">
                <div className="hidden md:block">
                {
                    user &&
                    <p className="text-lg font-medium">{user?.displayName}</p>
                }
                </div>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                {
                user &&
                <img src={user?.photoURL || user_logo} />
                }
                </div>
                </label>
                <div className="hidden md:block">
                {
                user ? 
                <Link onClick={handleLogOut}  className="btn btn-neutral border-0 bg-primary text-white rounded">Sign out</Link>
                :
                <Link to={"/login"} className="btn btn-neutral border-0 bg-primary text-white rounded">Login</Link>
                }
                </div>
                
            </div>
        </div>
    </div>
    );
};

export default Navbar;