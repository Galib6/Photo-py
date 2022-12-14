import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Ratings from 'react-ratings-declarative/build/ratings';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../hooks';
import ProductReview from '../ProductReview/ProductReview';

const Servicedetails = () => {
    useTitle("Service Details")
    const service = useLoaderData()
    const [reviews, setReviews] = useState([])
    const { user } = useContext(AuthContext)
    const location = useLocation();

    useEffect(() => {
        fetch(`https://assignment-11-server-rust.vercel.app/reviews/${service.service_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    const { img, title, Rating, description, service_id } = service
    const rating = parseInt(Rating)
    // console.log(rating)

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
            email: user.email,
            img: img,
            title: title,
            rating: rating,
            details: sreview
        }

        fetch('https://assignment-11-server-rust.vercel.app/review', {
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
                    toast.success('Review Successfully Added')
                    form.reset();
                    setReviews([review, ...reviews])

                }
            })
            .catch(er => console.error(er));
    }


    // console.log(service)
    return (
        <div className='md:mx-20 sm:mx-0' >
            <div>
                <div className='flex justify-center mt-8'>
                    <img className='md:h-5/6 sm:h-100 object-contain' src={img} alt="" />
                </div>
                <h1 className="text-5xl font-bold text-center">{title}</h1>
                <p className="py-6 text-2xl text-center sm:mx-0 lg:mx-28">{description}</p>
                <h2 className='mx-28 text-center'>
                    Avg Rating:
                </h2>
                <h2 className='text-center'><Ratings
                    rating={rating}
                    widgetDimensions="30px"
                    widgetSpacings="5px"
                >
                    <Ratings.Widget widgetRatedColor="gold" />
                    <Ratings.Widget widgetRatedColor="gold" />
                    <Ratings.Widget widgetRatedColor="gold" />
                    <Ratings.Widget widgetRatedColor="gold" />
                    <Ratings.Widget widgetRatedColor="gold" />
                </Ratings></h2>
            </div>
            <div>
                <div>
                    <div className='mt-10'>
                        <h1 className='text-4xl font-bold text-center'>Cutomer Review :</h1>
                        <h1 className='text-2xl font-bold text-center mt-2'>4 out of 5 Based On customer review</h1>
                    </div>
                </div>
                <div className='mg:m-10 sm:m-0  grid md:grid-cols-2 sm:grid-cols-1 gap-4'>
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
                                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required defaultValue={user.displayName} />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Your Photo Url</span>
                                        </label>
                                        <input type="text" name='img' placeholder="Photo Url" className="input input-bordered" defaultValue={user.photoURL} />
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
                                        <input type="number" name='rating' placeholder="rating" className="input input-bordered" required />
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
                        <div className="hero bg-base-100 my-20" >
                            <div className="hero-content text-center">
                                <div className="max-w-md">
                                    <h1 className="text-5xl font-bold">Hi</h1>
                                    <p className="py-3 text-3xl">Want to review our service?</p>
                                    <button className="btn btn-primary"><Link to="/login" state={{ from: location }} replace>Please Login</Link></button>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </div>
    );
};

export default Servicedetails;