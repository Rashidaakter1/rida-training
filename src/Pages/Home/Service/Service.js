import React from 'react';
import { Card } from 'react-bootstrap';
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
                    <Card.Text className='text-secondary fs-5 fw-bold'>
                       Price :Tk.{price}
                    </Card.Text>
                    <button  onClick={handleCheckout} className='login-btn fs-6 px-2'>Check Me Out</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;