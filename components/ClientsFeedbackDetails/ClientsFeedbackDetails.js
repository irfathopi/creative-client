import React, { useContext } from 'react';
import { UserContext } from '../../App';
import user1 from '../../images/customer-2.png'

const ClientsFeedbackDetails = ({ reviews }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(loggedInUser)
    return (
        <div className="col-md-4 text-center  cardStyle">
            <img style={{height: '50px'}} src={user1} alt="" />
            <h5 className="mt-3 mb-3">{reviews.name}</h5>
            <h6 className="mt-3 mb-3">{reviews.Designation}</h6>
            <p className="text-secondary">{reviews.discription}</p>
            
        </div>
    );
};

export default ClientsFeedbackDetails;