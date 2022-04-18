import React from 'react';
import {  Card } from 'react-bootstrap';
import './Review.css'
const Review = ({review}) => {
    const {img,name,description}=review
    return (
        <div className='col-lg-4 col-sm-12 col-md-6'>
        
            <div className='card-container'>
            <Card className='' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            </div>
        </div>
    );
};

export default Review;