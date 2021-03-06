import React from 'react';
import { useContext } from 'react';
import logo from '../../images/logos/logo.png'
import './Admin.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../../App';
import Allorder from '../AllOrder/Allorder';


const AdminServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <>
            <div className="clientHeader row  d-flex justify-content-around">
                <li className="col-md-2"><img src={logo} alt="" /></li>
                <li className="col-md-4">Services</li>
                <li className="col-md-2">{loggedInUser.name}</li>
            </div>
            <section className="d-flex justify-content-around">
                <div className="col-md-2 Menu">
                <Link to="/adimnservicelist"><li><a href="">Service List</a></li></Link>
                 <Link to="/addservice"><li><a href="">Add Service</a></li></Link>
                 <Link to="/addadmin">  <li><a href="">Add Admin</a></li></Link>
                </div>
                <div className="col-md-6 float-left service-pannel">
                <Allorder></Allorder>
                </div>
                <div className="col-md-0">
                    
                 </div>
        </section>
        </>
    );
};

export default AdminServiceList;