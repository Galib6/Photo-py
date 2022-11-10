import React from 'react';
import useTitle from '../hooks';

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <div className="carousel w-full mt-10">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://images.squarespace-cdn.com/content/v1/5824673c2e69cfc8ac1e3cd3/1576770096197-80YFAG5XE20EDHAR85A8/online+course+membership+option" className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://api.time.com/wp-content/uploads/2017/02/world-press-photo-078_ami-vitale_national-geographic-magazine.jpg" className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://www.format.com/wp-content/uploads/jeshoots-com-p8kaVRe4edM-unsplash.jpg" alt='' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://shotkit.com/wp-content/uploads/2021/01/photography-school.jpg" className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;