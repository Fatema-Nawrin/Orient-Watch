import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../Hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';
import watch from './paul-cuoco-CO2vOhPqlrM-unsplash.jpg'
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 mt-4' >
                <div className='mt-4 p-4 lg:p-8'>
                    <h1 className='text-4xl lg:text-6xl mb-4 lg:mt-12'>Orient Master</h1>
                    <h3 className='text-xl lg:text-3xl mb-4 text-gray-400 font-semibold'>Ultimate Elegance</h3>
                    <p className='lg:text-lg'>Orient-Master brings together craftmanship, function and style and perfect combo of tradition and modern day's innovation. It is crafted in rose gold case , features a black dial with paired with black leather strap.</p>
                </div>
                <div className='p-4 lg:mt-10'>
                    <img className='rounded-lg' src={watch} alt="" />
                </div>
            </div>
            <div className='mt-10 lg:mt-16'>
                <h2 className='text-center text-2xl lg:text-4xl'>Reviews </h2>
                <h3 className='text-center text-lg lg:text-xl text-gray-400 font-semibold'>What Our Customers Are Saying</h3>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-8'>
                    {
                        reviews.slice(0, 3).map(review => <ReviewCard
                            key={review.id}
                            review={review}></ReviewCard>)
                    }
                </div>
            </div>
            <div className='mb-8 text-center text-white'>
                <button className='bg-gray-400 p-4 rounded-xl text-lg'> <Link to="/reviews">See all reviews</Link></button>
            </div>
        </div>
    );
};

export default Home;