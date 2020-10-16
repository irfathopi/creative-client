import React from 'react';
import './ClientsFeedback.css'
import ClientsFeedbackDetails from '../ClientsFeedbackDetails/ClientsFeedbackDetails';
import { useState } from 'react';
import { useEffect } from 'react';



const ClientsFeedback = () => {
    const [reviews, setReviews] = useState([]);
    
    useEffect(() =>{
        fetch('https://pacific-escarpment-00882.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    },[])
    return (
        <section className="services-container mt-5 feedback"> 
            <div className="text-center">
                <h5>Clients <a  style={{color: '#7AB259'}}>Feedback</a></h5>
                
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    reviews.map(reviews => <ClientsFeedbackDetails reviews={reviews} key={reviews.name}></ClientsFeedbackDetails>)
                }
            </div>
        </div>
        </section>
    );
};

export default ClientsFeedback;