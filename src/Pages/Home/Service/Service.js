import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {

    const { name, img, description, price } = service
    const navigate=useNavigate()

    const handleCheckout=()=>{
        navigate('/checkout')
    }
    return (
        <div className='col-lg-4 col-sm-12 col-md-6'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button onClick={handleCheckout} variant="primary">Check Out Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;