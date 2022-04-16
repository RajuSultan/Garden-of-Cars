import React from 'react';
import Service from '../Service/Service';
import { useState, useEffect } from 'react';
import './Services.css';

const Servises = () => {
    const [services, setServices] = useState([]);
    // const [service, setService] = useState();
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1 className='garden text-primary'>Garden of Cars</h1>
            <div className='cars'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }

            </div>
        </div>

    );
};

export default Servises;