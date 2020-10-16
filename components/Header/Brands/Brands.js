import React from 'react';
import './Brands.css'
import slack from '../../../images/logos/slack.png'
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png'
import netflix from '../../../images/logos/netflix.png'
import airbnb from '../../../images/logos/airbnb.png'

const Brands = () => {
    return (
        <div className ="li-Design d-flex justify-content-around">
            <li><img src={slack} alt=""/></li>
            <li><img src={google} alt=""/></li>
            <li><img src={uber} alt=""/></li>
            <li><img src={netflix} alt=""/></li>
            <li><img src={airbnb} alt=""/></li>
        </div>
    );
};

export default Brands;