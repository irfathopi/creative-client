import React from 'react';
import './Navbar.css'
import logo from '../../../images/logos/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
            <img src={logo} alt="" className="logo" />
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-flex flex-row-reverse bd-highlight" id="navbarNav">
                <ul class="navbar-nav ">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Our Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Our Team</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact Us</a>
                    </li>
                    <li class="nav-item">
                    {<Link to = {`/order`}><button id="adminbtn" type="button" class="btn btn-dark">Log In</button></Link>}
                    </li>
                    <li class="nav-item">
                    {<Link to = {`/admin`}><button id="adminbtn" type="button" class="btn btn-dark">Admin pannel</button></Link>}
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;