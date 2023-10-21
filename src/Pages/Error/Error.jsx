import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center gap-4">
            <h1 className="text-7xl text-center font-bold text-error">404</h1>
            <p className="font-medium text-lg">Oops!! Page not found</p>
            <Link to={'/'} className="btn btn-error btn-outline">Go Home</Link>
        </div>
    );
};

export default Error;