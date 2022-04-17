import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-4 border rounded
         p-4'>
            <h1 className='text-center mt-4 mb-4 text-success'>Blogs</h1>
            <h2 className='' >Difference Between Authorization and Authentication</h2>
            <p className='text-secondary'>
                Authentication is the process of verifying who someone is, whereas Authorization is the process of verifying what specific applications, files, and data a user has access to.
                <br />
                The situation is like that of an airline that needs to determine which people can come on board.The first step is to confirm the identity of a passenger to make sure they are who they say they are. Once a passenger’s identity has been determined, the second step is verifying any special services the passenger has access to, whether it’s flying first-class or visiting the VIP lounge.
            </p>
            <hr />
            <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p className='text-secondary'>
                I am using firebase for authentication.because it provides authentication services for almost every major platform, which includes Google, Facebook, Twitter, Apple, Github, Microsoft, and Yahoo.Also provides authentication using email, password, and phone number using OTP, and it is also free.

                <br />
                 
                There are many options to implement authentication like  Multi-factor authentication,Certificate-based authentication,Biometric authentication,Token-based authentication

            </p>
            <hr />
            <h2>What other services does firebase provide other than authentication</h2>
            <p className='text-secondary'>
                Firebase is originally developed by Firebase inc and later acquired by Google. It provides different kinds of services that help you to develop high-quality mobile and web applications to grow your business. It is compatible with Web, iOS, Android.
                <br />
                Firebase is a full package that can help in developing your mobile or web applications faster with fewer resources and more efficiency.There are many other services firebase provides rather than authentication:

                <ul>
                    <li>Cloud Firestore</li>

                    <li>Cloud Functions</li>

                    <li>Hosting</li>

                    <li>Cloud Storage</li>

                    <li>Google Analytics</li>
                    <li>Predictions</li>
                    <li>Cloud Messaging</li>
                    <li>Dynamic Links</li>
                    <li>Remote Config</li>


                </ul>



            </p>
        </div>
    );
};

export default Blogs;