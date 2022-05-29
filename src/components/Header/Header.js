import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    const [open, setOpen] = useState(false);
    const paths = [
        { id: 1, name: 'Home', link: '/home' },
        { id: 2, name: 'Reviews', link: '/reviews' },
        { id: 3, name: 'Dashboard', link: '/dashboard' },
        { id: 4, name: 'About', link: '/about' },
    ]
    return (
        <nav className='relative md:mt-8'>
            <div onClick={() => setOpen(!open)} className='ml-4 md:hidden'>
                {open ? <FontAwesomeIcon icon={faX}></FontAwesomeIcon> : <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                }
            </div>
            <ul className={`md:flex  justify-center text-white ml-4 py-0 px-2 absolute md:static duration-500 ease-in ${open ? 'top-4' : 'top-[-200px]'}`}>
                {
                    paths.map(path =>
                        <CustomLink
                            key={path.id}
                            to={path.link} className="px-4 py-1 md:p-4">{path.name}
                        </CustomLink>)
                }
            </ul>
            {/* <CustomLink to="/home">Home</CustomLink>
            <CustomLink to="/reviews">Reviews</CustomLink>
            <CustomLink to="/dashboard">Dashboard</CustomLink>
            <CustomLink to="/blogs">Blogs</CustomLink>
            <CustomLink to="/about">About</CustomLink> */}
        </nav>
    );
};

export default Header;