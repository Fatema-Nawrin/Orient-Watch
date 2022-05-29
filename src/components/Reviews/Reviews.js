import React from 'react';
import useReviews from '../../Hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='mx-10'>
            <div className='mt-10 lg:mt-16'>
                <h2 className='text-center  text-2xl lg:text-4xl font-semibold mb-4'>Customer Reviews </h2>
                <h3 className='text-center text-lg lg:text-xl text-gray-400 font-medium'>Before making your choice, find out what our customers are saying about orient master, the good and the bad.</h3>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-6'>
                    {
                        reviews.map(review => <ReviewCard
                            key={review.id}
                            review={review}></ReviewCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;