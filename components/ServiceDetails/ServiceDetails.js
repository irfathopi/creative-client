import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css'
import image1 from '../../images/icons/service1.png';


const ServiceDetails = ({ services }) => {

    return (
        <div className="col-md-4 text-center  cardStyle">
            <img src={image1} alt=""/>
            <h5 className="mt-3 mb-3">{services.name}</h5>
            <p className="text-secondary">{services.text}</p>
            {<Link to = {`/order`}><button className ="order-button" type="button" class="btn btn-secondary">Order Now</button>
            </Link>}
        </div>
    );
};

export default ServiceDetails;

