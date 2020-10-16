import React from 'react';
import './Carousel.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import slider1 from '../../images/carousel-1.png'
import slider2 from '../../images/carousel-2.png'
import slider3 from '../../images/carousel-3.png'
import slider4 from '../../images/carousel-4.png'
import slider5 from '../../images/carousel-5.png'



const Carousel = () => {
    return (

        <section className="caruselSize ">
            <h2>Here are some of <a style={{ color: '#7AB259' }}>our works</a> </h2>
            <div className="d-flex justify-content-center carusol-container">
                <AliceCarousel autoPlay autoPlayInterval="3000" className="fluied">
                    <img src={slider1} className="sliderimg" />
                    <img src={slider2} className="sliderimg" />
                    <img src={slider3} className="sliderimg" />
                    <img src={slider4} className="sliderimg" />
                    <img src={slider5} className="sliderimg" />
                </AliceCarousel>
            </div>
        </section>

    );

};

export default Carousel;