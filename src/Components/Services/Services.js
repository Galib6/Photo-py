import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Home from '../Home/Home';
import useTitle from '../hooks';
import ServiceCardHome from './ServiceCardHOme/ServiceCardHome';

const Services = () => {
    useTitle("Home")

    const Services = useLoaderData()
    console.log(Services)
    return (
        <div>
            <div>
                <Home></Home>
            </div>
            <div>
                <p className="text-2xl font-bold text-gray-600 mt-5 text-center">Services</p>
                <h2 className="text-5xl font-semibold text-center">Our Service Area</h2>
                <p className='text-center'>the majority have suffered alteration in some form, by injected humour, <br />or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
                {
                    Services.map(Service => <ServiceCardHome
                        key={Service._id}
                        Service={Service}
                    >
                    </ServiceCardHome>)
                }
            </div>
            <div className='flex  justify-center my-10'>
                <button className="btn btn-sm "><Link to="/services">See All</Link></button>
            </div>
        </div>
    );
};

export default Services;