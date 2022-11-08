import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCardAll from '../ServiceCardAll/ServiceCardAll';

const AllServicePage = () => {
    const allServices = useLoaderData()
    const [services, setServices] = useState(allServices)

    const handleAddNewService = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const photoUrl = form.img.value;
        const descrip = form.description.value;
        const rating = form.rating.value;

        // console.log(title, photoUrl, descrip, rating)

        const service = {
            service_id: title,
            title: title,
            img: photoUrl,
            Rating: rating,
            description: descrip,
        }
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('service placed successfully')
                    form.reset();
                    setServices([service, ...services])

                }
            })
            .catch(er => console.error(er));


    }

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
            <div>
                <form onSubmit={handleAddNewService}>
                    <h2 className='text-4xl text-center mb-5'> Add a new service</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='title' placeholder="Service Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Cover Photo Url</span>
                            </label>
                            <input type="text" name='img' placeholder="Photo Url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name='description' placeholder="Description" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Average rating of your service</span>
                            </label>
                            <input type="text" name='rating' placeholder="Photo Url" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className='flex my-10'>
                        <input className='btn bg-orange-600 mx-auto' type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AllServicePage;