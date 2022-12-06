import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../hooks';

const Login = () => {
    useTitle("Login")
    const [error, setError] = useState("")
    const { login, setLoading, setUser } = useContext(AuthContext)

    const Location = useLocation()
    const navigate = useNavigate()
    const from = Location.state?.from?.pathname || "/"

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        login(email, password)
            .then(res => {
                const user = res.user;
                // console.log(user);
                setUser(user)
                setError("")
                form.reset()
                setLoading(false)
                toast.success("Seccessfully Logged in")

                const currentUser = {
                    email: user.email
                }
                // get jwt token
                fetch('https://assignment-11-server-rust.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })

                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        // local storage is the easiest but not the best place to store jwt token
                        localStorage.setItem('genius-token', data.token);
                        navigate(from, { replace: true });
                    });
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
            .finally(
                () => {
                    setLoading(false)
                }
            )
    }



    return (
        <div className='md:mx-20'>
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