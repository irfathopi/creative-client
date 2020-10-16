import React from 'react';
import Carousel from '../Carousel/Carousel';
import ClientsFeedback from '../ClientsFeedback/ClientsFeedback';
import Header from '../Header/Header/Header';
import MassageSection from '../MassageSection/MassageSection';
import Services from '../Services/Services';

const DeshBoard = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Carousel></Carousel>
            <ClientsFeedback></ClientsFeedback>
            <MassageSection></MassageSection>
        </div>
    );
};

export default DeshBoard;