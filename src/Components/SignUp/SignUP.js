import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const SignUP = () => {
    const { setUser, setLoadding, createUser, updateUserProfile, signInwithGoolge } = useContext(AuthContext)
    const provider = new GoogleAuthProvider();


    const [error, setError] = useState("")

    const handleGoogleSignIn = () => {
        signInwithGoolge(provider)
            .then(res => {
                setLoadding(true)
                const user = res.user;
                setUser(user)
                alert("Seccessfully Sign up")
            })
            .catch(err => {
                console.error(err)
            })
    }

    const handleUpdateUser = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => {

            })
            .catch(error => console.log(error))
    }

    //_________________________ signup__________
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        //__________handle login___________________
        createUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                setError("")
                form.reset()
                handleUpdateUser(name, photo)
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })

        //__________handle login___________________

    }

    return (
        <div >
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left mb-10">
                        <h1 className="text-5xl font-bold">Please Register Now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" type="text" placeholder="Enter name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input name="photoURL" type="text" placeholder="Your Photo" className="input input-bordered" required />
                            </div>
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
                                    <Link href="#" to="/login" className="label-text-alt link link-hover">{error}</Link>
                                </label>
                            </div>
                            <p>Have a Account? <Link to="/login">Login here. </Link></p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>

                        <div className='flex justify-center'>
                            <button onClick={handleGoogleSignIn} className=" mb-5 mr-5 btn btn-outline btn-ghost">< FaGoogle /><span className='ml-2'>google</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUP;