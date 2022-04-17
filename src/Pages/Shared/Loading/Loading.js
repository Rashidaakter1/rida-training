import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='container text-center mt-4'>
              <Spinner animation="border" />
              <p>Loading...</p>
        </div>
    );
};

export default Loading;