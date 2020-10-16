import React from 'react';
import './OwnOrderDetails.css'

const OwnOrderDetails = ({ orders }) => {
    return (

        <>
            <div class="row ">
                <div class="col-sm-6 ">
                    <div class="card card-margin d-flex justify-content-around ">
                        <div class="card-body ">
                            <h5 className="text-secondary ">{orders.subject}</h5>
                            <h6 className="mt-3 mb-3">{orders.email}</h6>
                            <h5 className="mt-3 mb-3">{orders.name}</h5>
                            <p>{orders.project}</p>
                            <button  class="btn btn-warning">Panding...</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default OwnOrderDetails;