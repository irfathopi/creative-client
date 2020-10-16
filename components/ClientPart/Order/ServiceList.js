import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png'
import './Order.css'
import { Link } from 'react-router-dom'
import OwnOrder from '../../OwnOrder/OwnOrder';


const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <>
            <div className="clientHeader row  d-flex justify-content-around">
                <li className="col-md-2"><img src={logo} alt="" /></li>
                <li className="col-md-4">Order</li>
                <li className="col-md-2">{loggedInUser.name}</li>
            </div>
            <section className="d-flex justify-content-around">
                <div className="col-md-2 Menu">
                <Link to="/order"><li><a href="">Order</a></li></Link>
                 <Link to="/servicelist"><li><a href="">Service List</a></li></Link>
                 <Link to="/review">  <li><a href="">Review</a></li></Link>
                </div>
                <div className="col-md-6 float-left">
                <OwnOrder></OwnOrder>
                </div>
                <div className="col-md-0">

                </div>  
        </section>
        </>
    );
};

export default ServiceList;