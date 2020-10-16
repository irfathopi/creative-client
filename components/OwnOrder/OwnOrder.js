import React, { useEffect,useState } from 'react';
import OwnOrderDetails from '../OwnOrderDetails/OwnOrderDetails';
import { useContext } from 'react';
import './OwnOrder.css'
import { UserContext } from '../../App';

const OwnOrder = () => {
    const[orders,setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() =>{
        fetch('https://pacific-escarpment-00882.herokuapp.com/orders?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data));
    },[])

    return (
        <div className="orderDetails">
           
            {
                    orders.map(orders => <OwnOrderDetails orders={orders} key={orders.name}></OwnOrderDetails>)
            }
        </div>
    );
};

export default OwnOrder;