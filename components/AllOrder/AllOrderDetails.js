import React from 'react';
import { Link } from 'react-router-dom';
import './AllOrder.css'

const AllOrderDetails = ({ allOrders }) => {
    return (
        <>
            <div class="row card-padding">
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-body ">
                            <div className="col-md-10 text-center  ">
                                <h3>Name: {allOrders.name}</h3>
                                <h5>email: {allOrders.email}</h5>
                                <h6>Subject: {allOrders.subject}</h6>
                                <p>Discription: {allOrders.project}</p>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Submition
                                     </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Panding</a>
                                        <a class="dropdown-item" href="#">OnGoing</a>
                                        <a class="dropdown-item" href="#">Done</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Separated link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default AllOrderDetails;

