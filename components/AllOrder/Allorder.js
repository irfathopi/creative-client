import React, { useEffect,useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import AllOrderDetails from './AllOrderDetails';

const Allorder = () => {
    const[allOrders,setAllOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() =>{
        fetch('https://pacific-escarpment-00882.herokuapp.com/ordersforadmin')
            .then(res => res.json())
            .then(data => setAllOrders(data));
    },[])

    return (
        <div className="orderDetails">
            
           
            {
                    allOrders.map(allOrders => <AllOrderDetails allOrders={allOrders} key={allOrders.name}></AllOrderDetails>)
            }
        </div>
    );
};

export default Allorder;