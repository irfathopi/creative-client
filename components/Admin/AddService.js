import React from 'react';
import { useContext } from 'react';
import logo from '../../images/logos/logo.png'
import './Admin.css'
import { Link, useParams } from 'react-router-dom'
import { UserContext } from '../../App';
import { useForm } from 'react-hook-form';





const AddService = () => {
    const {name} = useParams();
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        const servicesDetails = {...data};
        fetch('https://pacific-escarpment-00882.herokuapp.com/addServices',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(servicesDetails)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('New sevice added!');
            }
        })
    }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <>
            <div className="clientHeader row  d-flex justify-content-around">
                <li className="col-md-2"><img src={logo} alt="" /></li>
                <li className="col-md-4">Add Service</li>
                <li className="col-md-2">{loggedInUser.name}</li>
            </div>
            <section className="d-flex justify-content-around">
                <div className="col-md-2 Menu">
                <Link to="/adimnservicelist"><li><a href="">Service List</a></li></Link>
                 <Link to="/addservice"><li><a href="">Add Service</a></li></Link>
                 <Link to="/addadmin">  <li><a href="">Add Admin</a></li></Link>
                </div>
                <div className="col-md-6 float-left service-pannel">
                <form onSubmit={handleSubmit(onSubmit)} className = "formField" method="POST" action="/contact" >
                        <input ref={register({ required: true })} name="name" type="text" class="form-control"   placeholder="Enter Title" required/>
                        <br/>
                    
                        <input ref={register({ required: true })} name="text" type="text" placeholder="Discription" class="form-control" required />
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

export default AddService;