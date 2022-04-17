import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import {  useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

import './LogIn.css'

const LogIn = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate = useNavigate();
    const location = useLocation();

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);



    // const [
    //     createUserWithEmailAndPassword,
    //     user,
    //     loading,
    //     error,
    // ] = useCreateUserWithEmailAndPassword(auth);

    const [
        signInWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
        
    ] = useSignInWithEmailAndPassword(auth);



    const handleSignup = () => {
        navigate('/signup')
    }
    let errorElement;
    if ( emailError||googleError) {
        errorElement=
        <div>
            <p>Error: {emailError?.message}{googleError?.message}</p>
        </div>

    }
    if (googleLoading || emailLoading) {
        return <p>Loading...</p>;
    }

    const from = location.state?.from?.pathname || "/";

    if (googleUser || emailUser) {
        navigate(from, { replace: true });
    }


    const handleLogin = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
     
        signInWithEmailAndPassword(email,password)

    }
    return (
        <div className='container '>
            <Form onSubmit={handleLogin} className='mt-4 border m-4 p-4 rounded mx-auto w-50'>
                <h1></h1>
                <h2 className='fs-1 text-center mb-4'> Have we met before? </h2>
                <p className='fs-5 text-center mb-4'>Great to see you here! Just one step before
                    we take you to checkout.</p>

                <button onClick={() => signInWithGoogle()} className='google-btn w-100' >
                    <div className='d-flex justify-content-center'>

                        <img style={{ height: '35px' }} src="https://i.ibb.co/ZTdGcNf/google-logo.webp" alt="" />

                        <div><span className='ms-3'>Continue With Google</span></div>
                    </div>
                </button>

                <div className='d-flex align-items-center mt-3 mb-3'>
                    <div style={{ 'height': '1px' }} className=' w-50 bg-secondary'></div>
                    <p className='text-center text-secondary mt-2 px-2'>or</p>
                    <div style={{ 'height': '1px' }} className=' w-50 bg-secondary'></div>
                </div>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} className='py-2' type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} className='py-2' type="password" placeholder="Password" required
                    />
                </Form.Group>
                <p>{errorElement}</p>

                <button className='login-btn w-100 mt-4' type="login"
                >LogIn</button>

                <div className='text-center mt-2'>
                    <p>New here ?
                        <button onClick={handleSignup} className='btn btn-link text-info'
                        >Create new account</button>
                    </p>
                </div>

            </Form>
        </div>
    );
};

export default LogIn;