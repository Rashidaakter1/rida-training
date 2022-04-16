import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className=''>
            <h1 className='py-2 mt-4 mb-2 text-center'>IN-HOME, ONSITE, AND VIRTUAL</h1>
            <p className='mt-2 mb-2 text-center'>Are you looking for the perfect workout for you? Discover our full range of in-home and on-site health and wellness services.</p>
            <div className="container">
                
                <div className="row gy-4">
                {
                    services.map(service=><Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
                </div>
             
            </div>
        </div>
    );
};

export default Services;