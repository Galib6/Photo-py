import React from 'react';
import Ratings from 'react-ratings-declarative/build/ratings';


//_______________________Modal____________________
< div >

</div >
//_______________________Modal end ____________________

const ProductReview = ({ review }) => {
    const { name, img, details, rating } = review
    const frating = parseInt(rating)




    return (
        <div className=' mt-1 bg-slate-100 p-10 rounded-xl'>
            <div className='grid grid-cols-3'>
                <div className='col-span-2'>
                    <h1 className='text-sm font-semibold'>
                        {details}
                    </h1>
                </div>
                <h2 className='text-center'><Ratings
                    rating={frating}
                    widgetDimensions="20px"
                    widgetSpacings="3px"
                >
                    <Ratings.Widget widgetRatedColor="gold" />
                    <Ratings.Widget widgetRatedColor="gold" />
                    <Ratings.Widget widgetRatedColor="gold" />
                    <Ratings.Widget widgetRatedColor="gold" />
                    <Ratings.Widget />
                </Ratings></h2>
            </div>
            <div className='flex justify-between items-center'>
                <div className="mt-6 flex justify-start items-center flex-row space-x-2.5">
                    <div className='avatar'>
                        <div className='w-10 rounded-full'>
                            <img src={img} alt="girl-avatar" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start space-y-2">
                        <p className="text-base font-medium leading-none text-gray-800 dark:text-white">{name}</p>
                        <p className="text-sm leading-none text-gray-600 dark:text-white">14 Nov 2022</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductReview;















