import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2'


const Register = () => {

    const {creatUser} = useContext(AuthContext)
    const [error, setError] = useState('')

    
    const handleRegister =  (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        const photo_url = form.get('photo-url')
        console.log(name, email, password, photo_url)

        // password length validation
        if(password.length < 6){
            setError("Password must be at least 6 character")
            return;
        }
        else if(!/[A-Z][`!@#$%^&*()_\-+={};':"|,.<>?~ ]/.test(password)){
            setError('Password must have at least one capital letter and special character')
            return;
        }
        else{
            setError('')
        }
        
        
        creatUser(email, password)
        .then(() => {
            Swal.fire({
                title: 'Successful!',
                text: 'Registration Successful',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
        }).catch((err) => {
            console.log(err)
            Swal.fire({
                title: 'Error!',
                text: 'Email already in use',
                icon: 'error',
                confirmButtonText: 'Try again'
              })
        });
    }
    
    return (
        <div className="bg-[#ff523b0d]">
            <div className=" max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="hero min-h-screen py-16">
                    <div className="hero-content w-full p-0">
                        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 rounded">
                        <form onSubmit={handleRegister} className="card-body">
                            <h2 className="text-2xl text-center font-bold py-6 border-b">Register your account</h2>

                            {/* Name */}
                            <div className="form-control mt-4">
                                <label className="label">
                                    <span className="label-text font-semibold">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required/>
                            </div>

                            {/* Email */}
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email </span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                            </div>

                            {/* Password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                                <p className="text-sm text-red-500 my-1">{error}</p>
                            </div>

                            {/* Photo URL */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Photo URL</span>
                                </label>
                                <input type="text" name="photo-url" placeholder="Enter your photo URL" className="input input-bordered" />
                            </div>

                            {/* Register Button */}
                            <div className="form-control mt-6">
                                <button className="btn btn-neutral bg-primary border-none text-white">Register</button>
                            </div>
                            <p className="text-sm mt-2 text-center">Already have an account? <Link to={"/login"} className="text-primary link-hover font-semibold">Login</Link></p>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;