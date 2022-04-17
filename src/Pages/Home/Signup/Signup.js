import { updateProfile } from 'firebase/auth';
import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const Signup = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate =useNavigate();

    const handleLogin=()=>{
        navigate('/login')
    }
    
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);



    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    let errorElment;
    if (error||googleError) {
       
        errorElment=
          <div>
            <p>Error: {error?.message}{googleError?.message}</p>
          </div>
          
       
      }

    if(googleUser||user){
        navigate('/home')
    }
    if(googleLoading||loading){
        <Loading></Loading>
    }

    const handleSignup=(event)=>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        
        createUserWithEmailAndPassword(email,password)
        
        alert('Sent email');
    }

    return (
        <div className='container '>
            <Form onSubmit={handleSignup} className='mt-4 border m-4 p-4 rounded mx-auto w-50'>
               
                <h2 className='fs-1 text-center mb-4'>Create account </h2>


                <button className='google-btn w-100' >
                    <div className='d-flex justify-content-center'>

                        <img className='' style={{ height: '35px' }} src="https://i.ibb.co/ZTdGcNf/google-logo.webp" alt="" />

                        <div><span onClick={()=>signInWithGoogle()} className='ms-3'>Continue With Google</span></div>
                    </div>
                </button>

                <div className='d-flex align-items-center mt-3 mb-3'>
                    <div style={{ 'height': '1px' }} className=' w-50 bg-secondary'></div>
                    <p className='text-center text-secondary mt-2 px-2'>or</p>
                    <div style={{ 'height': '1px' }} className=' w-50 bg-secondary'></div>
                </div>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" className="form-control py-2" placeholder="First name" aria-label="First name" />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control py-2" placeholder="Last name" aria-label="Last name" />
                        </div>
                    </div>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} className='py-2' type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} className='py-2' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control className='py-2' type="password" placeholder="Confirm Password" required />
                </Form.Group>

                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                          Agree to the terms and conditions
                        </label>
                </div>
                    <p>{errorElment}</p>
                <button className='login-btn w-100 mt-4' type="login"
                >Sign up</button>

                <div className='text-center mt-2'>
                    <p>Already have an account?
                        <button onClick={handleLogin} className='btn btn-link text-info'
                        >LogIn</button>
                    </p>
                </div>

            </Form>
        </div>
    );
};

export default Signup;