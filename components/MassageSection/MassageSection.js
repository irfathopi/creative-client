import React from 'react';
import './MassageSection.css'

const MassageSection = () => {
    return (
        <section className="massageBox row d-flex justify-content-around">
            <div className="col-md-4 our-massage">
                <h4>Let us handele your project,professionally. </h4>
                <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
            </div>
            <div className="col-md-5 client-massage">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email" required />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="You name/Company name" />
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your massage"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default MassageSection;