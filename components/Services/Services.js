import React, { useEffect } from 'react';
import './Services.css'
import webDesign from '../../images/icons/service1.png'
import graphic from '../../images/icons/service2.png'
import webDevelopment from '../../images/icons/service3.png'
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import { useState } from 'react';



const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect(() =>{
        fetch('https://pacific-escarpment-00882.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    },[])
    return (
        <section className="services-container mt-5 sectionStyle">
            <div className="text-center">
                <h2>Provide awsome <a style={{color: '#7AB259'}}>services</a> </h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5  ">
                {
                    services.map(services => <ServiceDetails services={services} key={services.name}></ServiceDetails>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;