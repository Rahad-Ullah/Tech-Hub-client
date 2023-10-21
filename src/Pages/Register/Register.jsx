import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {

    const {creatUser} = useContext(AuthContext)

    
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
            alert("Password must be at least 6 character")
            return;
        }
        else if(!/[A-Z]/.test(password)){
            alert('Password must have at least one capital letter')
            return;
        }
        
        
        creatUser(email, password)
        .then(() => {
            alert("Registration Successful")
        }).catch((err) => {
            alert('Invalid Input')
            console.log(err)
        });
    }
    
    return (
        <div className="">

        </div>
    );
};

export default Register;