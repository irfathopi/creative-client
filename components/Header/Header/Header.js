import React from 'react';
import Brands from '../Brands/Brands';
import HeadDetails from '../HeadDetails/HeadDetails';
import Navbar from '../Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <>
        <div className ="dualcol-test">
            <Navbar></Navbar>
            <HeadDetails></HeadDetails>
        </div>
            <Brands></Brands>
        </>
    );
};

export default Header;