import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div className='mt-4 border bg-dark '>
            <h6 style={{height:'60px'}} className='text-center mt-5 text-white '>
                Copyright @ {year} 
            </h6>
        </div>
    );
};

export default Footer;