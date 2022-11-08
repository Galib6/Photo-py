import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import ProductReview from '../../ProductReview/ProductReview';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCardAll = ({ service }) => {
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl h-full">
                <figure>
                    <PhotoView src={service.img}>
                        <img src={service.img} alt="Shoes" />
                    </PhotoView>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{service.title}</h2>
                    <p>{service.description.slice(0, 100)}....</p>
                    <div className="card-actions flex justify-around">
                        <h1 className="card-title">Price: ${service.price}</h1>
                        <button className="btn btn-sm btn-primary"><Link to={`/services/${service._id}`}>Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCardAll;