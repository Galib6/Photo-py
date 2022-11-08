import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import ProductReview from '../ProductReview/ProductReview';

const Servicedetails = () => {
    const service = useLoaderData()
    const [reviews, setReviews] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${service.service_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    console.log(reviews)

    const handleAddNewReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const img = form.img.value;
        const sreview = form.review.value;
        const rating = form.rating.value;

        const review = {
            serviceId: service_id,
            name: name,
            sort: "added",
            img: img,
            rating: rating,
            details: sreview
        }

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review placed successfully')
                    form.reset();
                    setReviews([review, ...reviews])

                }
            })
            .catch(er => console.error(er));
    }

    const { img, title, Rating, description, service_id } = service
    // console.log(service)
    return (
        <div >
            <div>
                <div className='flex justify-center mt-8'>
                    <img className='max-w-screen-md' src={img} alt="" />
                </div>
                <h1 className="text-5xl font-bold text-center">{title}</h1>
                <p className="py-6 text-2xl text-center mx-28">{description}</p>
                <h2 className='mx-28 text-center'>
                    Avg Rating:
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                </h2>
            </div>
            <div>
                <div>
                    <div className='mt-10'>
                        <h1 className='text-4xl font-bold text-center'>Cutomer Review :</h1>
                        <h1 className='text-2xl font-bold text-center mt-2'>4 out of 5 Based On customer review</h1>
                    </div>
                </div>
                <div className='m-10 grid grid-cols-2 gap-4'>
                    {
                        reviews.map(review => <ProductReview
                            key={review._id}
                            review={review}
                        >
                        </ProductReview>)
                    }
                </div>
            </div>
            {
                user?.uid ?
                    <>
                        <div className='mx-20'>
                            <form onSubmit={handleAddNewReview} >
                                <h2 className='text-4xl text-center mb-5'> Add your review</h2>
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Your Name</span>
                                        </label>
                                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Your Photo Url</span>
                                        </label>
                                        <input type="text" name='img' placeholder="Photo Url" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Review</span>
                                        </label>
                                        <input type="text" name='review' placeholder="Write your review here" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Your rating to our service</span>
                                        </label>
                                        <input type="text" name='rating' placeholder="rating" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className='flex my-10'>
                                    <input className='btn bg-gray-600 mx-auto' type="submit" value="Submit" />
                                </div>
                            </form>
                        </div>
                    </>
                    :
                    <>

                    </>
            }
        </div>
    );
};

export default Servicedetails;