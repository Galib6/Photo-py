import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState("")
    const { signIn, setLoadding } = useContext(AuthContext)

    const Location = useLocation()
    const navigate = useNavigate()
    const from = Location.state?.from?.pathname || "/"

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                setError("")
                form.reset()
                // toast('Here is your toast.');
                navigate(from, { replace: true })
                setLoadding(false)
                alert("Seccessfully Sign up")
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
            .finally(
                () => {
                    setLoadding(false)
                }
            )
    }



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="text" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link href="#" className=" text-red-600 label-text-alt link link-hover">{error}</Link>
                                </label>
                                <p>New to here? <Link to="/signup">Create a new account</Link></p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Login;