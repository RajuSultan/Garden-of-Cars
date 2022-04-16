import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const date = today.getFullYear();
    return (
        <div className='bg-dark text-white py-4 text-center'>
            <p>Coppy Right@{date}</p>
        </div>
    );
};

export default Footer;