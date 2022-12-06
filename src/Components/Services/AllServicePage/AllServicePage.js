import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks';
import ServiceCardAll from '../ServiceCardAll/ServiceCardAll';

const AllServicePage = () => {
    useTitle("All Services")
    // const allServices = useLoaderData()
    const [services, setServices] = useState([])
    const { sloading, setsLoading } = useContext(AuthContext)

    useEffect(() => {
        setsLoading(true)
        fetch("https://assignment-11-server-rust.vercel.app/services")
            .then(res => res.json())
            .then(data => {
                setsLoading(false)
                setServices(data)
            })
    }, [])

    return (
        <div className='md:mx-20 sm:mx-0'>
            {
                sloading ?
                    <>
                        <div className='min-h-screen flex justify-center items-center'>
                            <div>
                                <progress className="progress w-56 "></progress>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className='md:my-10'>
                            <p className="text-2xl font-bold text-gray-600 text-center">Services</p>
                            <h2 className="text-5xl font-semibold text-center">My Service Area</h2>
                            <p className='text-center'>the majority have suffered alteration in some form, by injected humour, <br />or randomised words which don't look even slightly believable. </p>
                        </div>
                        <div className='min-h-screen grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10 '>
                            {
                                services?.map(service => <ServiceCardAll
                                    key={service.title}
                                    service={service}
                                ></ServiceCardAll>)
                            }
                        </div>
                    </>
            }



        </div>
    );
};

export default AllServicePage;