import React from 'react';
import useReviews from '../../Hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <div className='mt-10 lg:mt-16'>
                <h2 className='text-center text-xl lg:text-3xl text-gray-500 font-semibold'>Customer Reviews </h2>
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