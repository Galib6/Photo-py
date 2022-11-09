import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import MySingleReview from './MysIngleReview/MySingleReview';

const Myreview = () => {
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReview] = useState()
    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`, {
        })
            .then(res => {
                // if (res.status === 401 || res.status === 403) {
                //     return logOut();
                // }
                return res.json();
            })
            .then(data => {
                setReview(data);
                console.log(reviews)
            })
    }, [user?.email])


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`http://localhost:5000/myreviews/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = reviews.filter(odr => odr._id !== id);
                        setReview(remaining);
                        toast.success("Successfully Deleted")
                    }
                })
        }
    }



    return (
        <div className='min-h-screen mt-10'>
            reviews ?
            <>
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Service Name</th>
                                <th>Review</th>
                                <th>Review Rating</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reviews?.map(review => <MySingleReview
                                    key={review._id}
                                    review={review}
                                    handleDelete={handleDelete}
                                ></MySingleReview>)
                            }
                        </tbody>
                    </table>
                </div>
            </>

            :
            <>
                <div className="hero min-h-screen">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">No review were added</h1>

                        </div>
                    </div>
                </div>
            </>
        </div >
    );
};

export default Myreview;