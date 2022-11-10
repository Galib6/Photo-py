import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaCameraRetro } from "react-icons/fa";
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    // console.log(user)

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className="navbar bg-base-100 shadow bg-base-100 ">
            <div className="navbar-start ml-10">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/courses/all">Courses</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <>
                            {
                                user?.uid ?
                                    <>

                                    </>
                                    :
                                    <>

                                        <li><Link to="/login">Login</Link></li>
                                        <li><Link to="/signup">Sign up</Link></li>
                                    </>
                            }
                        </>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-2xl"><FaCameraRetro /><span> Asadullah Al Galib</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/addnewservice">Add A Service</Link></li>

                    {/* <li><Link to="/Blog">Blog</Link></li> */}
                    <>
                        {
                            user?.uid ?
                                <>
                                    <li><Link to="/myreview">My Review</Link></li>
                                </>
                                :
                                <>

                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/signup">Sign up</Link></li>
                                </>
                        }
                    </>
                </ul>
            </div>
            <div className="navbar-end mr-10">
                <label className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom " data-tip={user?.displayName}>
                    <div className="w-10 rounded-full "  >
                        <>
                            {
                                user?.uid ?
                                    <>
                                        <img src={user.photoURL} alt="" />

                                    </>
                                    :
                                    <>
                                    </>
                            }

                        </>
                    </div>
                </label>
                <div className="dropdown dropdown-end ">

                    <>
                        {
                            user?.uid ?
                                <>
                                    <ul className="menu menu-horizontal p-0 "><li> <span className=' hidden lg:block' tabIndex={0}> {user?.displayName}</span></li>
                                        <li><a onClick={handleLogOut}>Logout</a></li>
                                    </ul>
                                </>
                                :
                                <>
                                </>
                        }

                    </>


                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        <>
                            {
                                user?.uid ?
                                    <>
                                        <li><a onClick={handleLogOut}>Logout</a></li>
                                    </>
                                    :
                                    <>
                                    </>
                            }

                        </>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;