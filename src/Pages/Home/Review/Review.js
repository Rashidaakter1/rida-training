import React from 'react';
import {  Card } from 'react-bootstrap';

const Review = ({review}) => {
    const {img,name,description}=review
    return (
        <div className='col-lg-4 col-sm-12 col-md-6'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        </div>
    );
};

export default Review;