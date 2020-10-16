import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png'
import './Order.css'
import { Link, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form';


const Review = () => {
    const {name} = useParams();
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        const review = {...data};
        fetch('https://pacific-escarpment-00882.herokuapp.com/addReview',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('Your review submitted successfully!');
            }
        })
    }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <>
            <div className="clientHeader row  d-flex justify-content-around">
                <li className="col-md-2"><img src={logo} alt="" /></li>
                <li className="col-md-4">Order</li>
                <li className="col-md-2">{loggedInUser.name}</li>
            </div>
            <section className="d-flex justify-content-around">
                <div className="col-md-2 Menu">
                <Link to="/order"><li><a href="">Order</a></li></Link>
                 <Link to="/servicelist"><li><a href="">Service List</a></li></Link>
                 <Link to="/review">  <li><a href="">Review</a></li></Link>
                </div>
                <div className="col-md-6 float-left">
                
                    <form  onSubmit={handleSubmit(onSubmit)} className = "formField" method="POST" action="/contact" >
                        
                                <input ref={register({ required: true })} name="name" type="text" class="form-control"   placeholder="Name" required/>
                                <br/>
                            
                                <input ref={register({ required: true })} name="Designation" type="text" placeholder="Company's name. Designation" class="form-control" required />
                                <br/>
                            
                                <input ref={register({ required: true })} name="discription" type="text" placeholder="Discription" class="form-control" required />
                                <br/>
                            
                                <button type="submit" class="btn btn-dark">Submit</button>
                            </form>
                            
                </div>
                <div className="col-md-0">
                    
                 </div>
        </section>
        </>
    );
};

export default Review;