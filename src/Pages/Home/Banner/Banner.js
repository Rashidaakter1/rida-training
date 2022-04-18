import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Banner = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    
   
   
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src=" https://i.ibb.co/gyWzgfN/banner1.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>EXERCISE YOUR MIND AND BODY.</h3>
                        <Link to='/about' className=' fs-1 text-decoration-none text-white'> It's Rida ... </Link>
                     
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/dgMNRdL/banner3.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>TURN FAT INTO FIT </h3>
                        <h2> Fight For Fitness</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src=" https://i.ibb.co/DRGV1yB/banner2.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>FITTER,HEALTHIER,HAPPIER</h3>
                        <h2>Make Yourself Stronger</h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
        </div>
    );
};

export default Banner;