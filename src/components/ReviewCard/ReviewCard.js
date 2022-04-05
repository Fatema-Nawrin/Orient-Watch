import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewCard.css'

const ReviewCard = (props) => {
    const { review } = props;
    const { name, reviewtext, ratings } = review;

    return (
        <div className='card relative bg-cyan-900 text-white my-8 p-6 rounded-xl text-center'>
            <h4 className='pt-4'> <q> {reviewtext} </q></h4>
            <h2 className='absolute bottom-16 inset-x-0'>{ratings}
                <FontAwesomeIcon className='ml-2 align-text-top' icon={faStar} style={{ color: 'goldenrod' }}></FontAwesomeIcon></h2>
            <h2 className='absolute bottom-8 inset-x-0 text-lg'>{name}</h2>
        </div >
    );
};

export default ReviewCard;