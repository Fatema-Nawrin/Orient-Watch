import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import React from 'react';

const Footer = () => {
    library.add(fab)
    return (
        <div className='mt-10 py-8 bg-black text-white  text-center'>
            <div>Follow us </div>
            <div>
                <FontAwesomeIcon className='mt-1 h-5 pl-2' icon={['fab', 'facebook']} style={{ color: 'white' }} />
                <FontAwesomeIcon className='mt-1 h-5 pl-2' icon={['fab', 'twitter']} style={{ color: 'white' }} />
                <FontAwesomeIcon className='mt-1 h-5 pl-2' icon={['fab', 'instagram']} style={{ color: 'white' }} />
            </div>

            <p className='pt-4'>Orient watch &copy; 2022</p>
            <p><small>All rights reserved. </small></p>

        </div>
    );
};

export default Footer;