import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';

const CheckOut = () => {
    const emailRef = useRef('');
    return (
        <div>
            <div className='container '>
                <Form className='mt-4 border m-4 p-4 rounded mx-auto w-50'>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <div className="row mb-3">
                            <div className="col">
                                <input type="text" className="form-control py-2" placeholder="First name" aria-label="First name" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control py-2" placeholder="Last name" aria-label="Last name" />
                            </div>

                        </div>

                        <div className="mb-3">
                            <input type="text" className="form-control py-2" placeholder="Address" aria-label="Address" />
                        </div>
                        <div className="mt-3 mb-3">
                            <input type="number" className="form-control py-2" placeholder="Phone" aria-label="Phone" />
                        </div>
                        
                        <Form.Control ref={emailRef} className='py-2 ' type="email" placeholder="Enter email" required />

                    </Form.Group>


                    <button className='login-btn w-100 mt-4' type="login"
                    >Book Now</button>



                </Form>
            </div>
        </div>
    );
};

export default CheckOut;