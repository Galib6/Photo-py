import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCardHome = ({ Service }) => {
    return (

        <div className="card  bg-base-100 shadow-xl">
            <figure>
                <PhotoView src={Service.img}>
                    <img src={Service.img} alt="" />
                </PhotoView>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{Service.title}</h2>
                <p>{Service.description.slice(0, 100)}....</p>
                <div className="card-actions flex justify-around">
                    <h1 className="card-title">Price: ${Service.price}</h1>
                    <button className="btn btn-sm btn-primary"><Link to={`/services/${Service._id}`}>Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCardHome;