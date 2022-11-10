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
        <div className='mx-20'>
            <div>
                <Home></Home>
            </div>
            <div className='md:my-20'>
                <p className="text-2xl font-bold text-gray-600 text-center">Services</p>
                <h2 className="text-5xl font-semibold text-center">My Service Area</h2>
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
            <div className='flex  justify-center mt-5 mb-2'>
                <button className="btn btn-sm btn-primary "><Link to="/services">See All</Link></button>
            </div>
            <div>
                <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5">
                    <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
                        <div className="flex flex-col justify-center">
                            <div className="max-w-xl mb-6">
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                    Asadullah Al Galib
                                    <br className="hidden md:block" />
                                    is a Photographer{' '}
                                    <span className="relative px-1">
                                        <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                                        <span className="relative inline-block text-green-400">
                                            based in BD
                                        </span>
                                    </span>
                                </h2>
                                <p className="text-base text-gray-700 md:text-lg">
                                    Galib has been a professional photographer since 2008, covering event throughout France, United Kingdom, Italy.
                                </p>
                            </div>
                            <p className="mb-4 text-sm font-bold tracking-widest uppercase">
                                My Expertise
                            </p>
                            <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
                                <ul className="space-y-3">
                                    <li className="flex">
                                        <span className="mr-1">
                                            <svg
                                                className="w-5 h-5 mt-px text-green-400"
                                                stroke="currentColor"
                                                viewBox="0 0 52 52"
                                            >
                                                <polygon
                                                    strokeWidth="4"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    fill="none"
                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                />
                                            </svg>
                                        </span>
                                        A slice of heaven
                                    </li>
                                    <li className="flex">
                                        <span className="mr-1">
                                            <svg
                                                className="w-5 h-5 mt-px text-green-400"
                                                stroke="currentColor"
                                                viewBox="0 0 52 52"
                                            >
                                                <polygon
                                                    strokeWidth="4"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    fill="none"
                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                />
                                            </svg>
                                        </span>
                                        Disrupt inspire
                                    </li>
                                    <li className="flex">
                                        <span className="mr-1">
                                            <svg
                                                className="w-5 h-5 mt-px text-green-400"
                                                stroke="currentColor"
                                                viewBox="0 0 52 52"
                                            >
                                                <polygon
                                                    strokeWidth="4"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    fill="none"
                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                />
                                            </svg>
                                        </span>
                                        Preliminary thinking
                                    </li>
                                </ul>
                                <ul className="space-y-3">
                                    <li className="flex">
                                        <span className="mr-1">
                                            <svg
                                                className="w-5 h-5 mt-px text-green-400"
                                                stroke="currentColor"
                                                viewBox="0 0 52 52"
                                            >
                                                <polygon
                                                    strokeWidth="4"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    fill="none"
                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                />
                                            </svg>
                                        </span>
                                        Flipboard curmudgeon
                                    </li>
                                    <li className="flex">
                                        <span className="mr-1">
                                            <svg
                                                className="w-5 h-5 mt-px text-green-400"
                                                stroke="currentColor"
                                                viewBox="0 0 52 52"
                                            >
                                                <polygon
                                                    strokeWidth="4"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    fill="none"
                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                />
                                            </svg>
                                        </span>
                                        Storage shed
                                    </li>
                                    <li className="flex">
                                        <span className="mr-1">
                                            <svg
                                                className="w-5 h-5 mt-px text-green-400"
                                                stroke="currentColor"
                                                viewBox="0 0 52 52"
                                            >
                                                <polygon
                                                    strokeWidth="4"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    fill="none"
                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                />
                                            </svg>
                                        </span>
                                        Satoshi Nakamoto
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <img
                                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                                src="https://dailyasianage.com/library/1646308106_0.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-start max-w-screen-sm md:flex-row sm:mx-auto">
                        <div>
                            <p className="text-center mb-2 text-xs font-semibold tracking-wide text-gray-800 uppercase">
                                Awared
                            </p>
                            <h2 className="text-center mb-4 font-sans text-3xl font-bold tracking-tight text-green-400 sm:text-4xl sm:leading-none">
                                Best Photogapher in South Asia
                            </h2>
                            <p className="text-center text-base text-gray-700 md:text-lg">
                                The Asia Pacific Photography Awards were launched for the first time in 2021 to celebrate and promote the diversity of photographic genres worldwide. Hosted by the New Zealand Institute of Professional Photography, the awards are run by photographers, for photographers.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;