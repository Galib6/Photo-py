import React, { useState } from 'react';
import toast from 'react-hot-toast';

const MySingleReview = ({ review, handleDelete }) => {
    const [preReview, setpreReview] = useState(review)
    const { title, details, rating, _id, img } = preReview


    const handleUpdateUser = (event) => {
        event.preventDefault();
        // console.log(user)
        fetch(`https://assignment-11-server-rust.vercel.app/myreviews/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(preReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    toast.success("Succesfully Updated!")
                }

            })
    }


    const handleUpdateReview = (event) => {
        event.preventDefault();
        const value = event.target.value;
        const feild = event.target.name;
        const newReview = { ...preReview }
        newReview[feild] = value;
        setpreReview(newReview)
    }

    return (
        <tr>
            <th></th>
            <td>{title}</td>
            <td>{details.slice(0, 50)}</td>
            <td>{rating}</td>
            <td><button className="btn btn-outline btn-ghost btn-sm" onClick={() => handleDelete(_id)}>Delete</button> <label htmlFor="my-modal" className="btn btn-outline btn-ghost btn-sm">Edit</label></td>
            {/* ____________________________________________________________ */}
            {/* modal  */}
            <div>
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <div >
                            <form onSubmit={handleUpdateUser}>
                                <h2 className='text-4xl text-center mb-5'> Edit your review</h2>
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Service Name</span>
                                        </label>
                                        <input onChange={handleUpdateReview} type="text" name='name' placeholder="Your Name" className="input input-bordered" defaultValue={title} required readOnly />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Your Photo Url</span>
                                        </label>
                                        <input onChange={handleUpdateReview} type="text" name='img' placeholder="Photo Url" className="input input-bordered" defaultValue={img} readOnly />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Review</span>
                                        </label>
                                        <input onChange={handleUpdateReview} type="text" name='details' placeholder="Write your review here" className="input input-bordered" defaultValue={details} required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Your Rating out of 5</span>
                                        </label>
                                        <input type="text" onChange={handleUpdateReview} name='rating' placeholder="rating" className="input input-bordered" defaultValue={rating} required />
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <div className='my-6'>
                                        <input className='btn  btn-outline btn-sm' type="submit" value="Submit" />
                                    </div>
                                    <div className="modal-action ml-5">
                                        <label htmlFor="my-modal" className="btn btn-outline btn-sm">Close</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* _______________________________________________________________ */}
        </tr >
    );
};

export default MySingleReview;