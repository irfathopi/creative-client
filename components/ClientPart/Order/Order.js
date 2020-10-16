import React from 'react';
import { useContext,useState } from 'react';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png'
import './Order.css'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';



const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {name} = useParams();
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        const orderDetails = {...data};
        fetch('https://pacific-escarpment-00882.herokuapp.com/addOrders',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('You submission successfully completed.');
            }
        })
    }
    
    return (
        <>
            <div className="clientHeader row  d-flex justify-content-around">
                <li className="col-md-2"><img src={logo} alt="" /></li>
                <li className="col-md-4">Order</li>
                <li className="col-md-2">{loggedInUser.name}</li>
            </div>
            <section className="d-flex justify-content-around">
                <div className="col-md-2 Menu ">
                <Link to="/order"><li><a href="" className="">Order</a></li></Link>
                 <Link to="/servicelist"><li><a href="">Service List</a></li></Link>
                 <Link to="/review">  <li><a href="">Review</a></li></Link>
                </div>
                <div className="col-md-4 float-left">
                    <form onSubmit={handleSubmit(onSubmit)} className = "formField" method="POST" action="/contact" >
                        
                                <input name="name" ref={register({ required: true })} type="text" class="form-control"   placeholder="Name" required/>
                                <br/>
                            
                                <input defaultValue={loggedInUser.email} name="email" ref={register({ required: true })} type="email" placeholder="Your email address" class="form-control" required />
                                <br/>
                            
                                <input ref={register({ required: true })} name="subject" type="text" placeholder="Subject" class="form-control" required />
                                <br/>
                            
                                <input name="project" ref={register({ required: true })} placeholder="Project Details" type="" class="form-control" required />
                                <br/>
                                
                            
                                <input name="price" ref={register({ required: true })} type="number" class="form-control" placeholder="$Price" required/>
                                <br/>
                                    <button  type="submit" class="btn btn-primary">Submit</button>
                            </form>
                            </div>
                            <div className="col-md-2">

                            </div>
        </section>
        </>
    );
};

export default Order;