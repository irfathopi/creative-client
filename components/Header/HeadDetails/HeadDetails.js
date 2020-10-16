import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import Frame from '../../../images/logos/Frame.png'
import './HeadDetails.css'

const HeadDetails = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    return (
        <>
            <section className="features-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 align-self-center">
                        <h1>Lets Grow Your Brand To The Next Level</h1>
                        <p className="text-secondary my-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat                         </p>
                        {<Link to = {`/order`}><button type="button" class="btn btn-dark">Hire Us</button></Link>}
                        <br/>

                    </div>
                    <div className="col-md-7 mb-4 m-md-0">
                        <img className="img-fluid"  alt="" src={Frame}/>
                    </div>
                </div>
            </div>
        </section>
        

       


        </>
    );
};

export default HeadDetails;
