import React from 'react';

const ReviewCard = ({ review }) => {
    return (
        <div className="bg-gray-500 w-10/12 md:w-1/2  mb-16  mx-auto rounded shadow-lg">
            <div className=' bg-gray-100  mx-auto p-4 my-8 mb-0 mt-0 rounded shadow-lg '>
                <div className="review-header flex justify-between items-center">
                    <img className='w-16 rounded h-16 mr-2' src={review.picture} alt="" />
                    <h1 className='text-2xl font-bold font-mono'>{review.name}</h1>
                    <p className=' font-sans font-semibold'> <span className='text-gray-500'>Rating:</span>   {review.rating}</p>
                </div>
            </div>
            <div className="review-info p-5 text-white shadow-lg">
                <p>{review.comment.length > 300 ? review.comment.slice(0, 300) + ' ...' : review.comment}</p>
            </div>
        </div>
    );
};

export default ReviewCard;