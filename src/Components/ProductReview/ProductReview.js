import React from 'react';
import { HiPencil } from "react-icons/hi";

//_______________________Modal____________________
< div >

</div >
//_______________________Modal end ____________________

const ProductReview = ({ review }) => {
    const { name, img, details } = review




    return (
        <div className=' mt-1 bg-slate-100 p-10 rounded-xl'>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-sm font-semibold'>
                        {details}
                    </h1>
                </div>
                <div className="cursor-pointer mt-2 md:mt-0">
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                </div>
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
                        <p className="text-sm leading-none text-gray-600 dark:text-white">23 June 2021</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductReview;















