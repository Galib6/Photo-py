import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../hooks';

const AddAService = () => {
    useTitle("Add new Service")

    const handleAddNewService = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const photoUrl = form.img.value;
        const descrip = form.description.value;
        const rating = form.rating.value;
        const price = form.price.value;

        // console.log(title, photoUrl, descrip, rating)

        const service = {
            service_id: title,
            title: title,
            img: photoUrl,
            Rating: rating,
            price: price,
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
                    toast.success('Service Added Successfully')
                    form.reset();
                }
            })
            .catch(er => console.error(er));


    }
    return (
        <div>
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
                        <div className="form-control col-span-2">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name='description' placeholder="Description" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price' placeholder="Pricing of your service" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Average rating of your service</span>
                            </label>
                            <input type="text" name='rating' placeholder="Photo Url" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className='flex my-10'>
                        <input className='btn btn-outline btn-sm btn-ghost mx-auto' type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAService;