import React from 'react';
import useTitle from '../hooks';

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.squarespace-cdn.com/content/v1/5824673c2e69cfc8ac1e3cd3/1576770096197-80YFAG5XE20EDHAR85A8/online+course+membership+option")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;