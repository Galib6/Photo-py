import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCardAll from '../ServiceCardAll/ServiceCardAll';

const AllServicePage = () => {
    const allServices = useLoaderData()
    const [services, setServices] = useState(allServices)

    return (
        <div>
            <div className='min-h-screen grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10 '>
                {
                    services.map(service => <ServiceCardAll
                        key={service.title}
                        service={service}
                    ></ServiceCardAll>)
                }
            </div>



        </div>
    );
};

export default AllServicePage;