import React, { Component } from 'react';

class Customers extends Component {
    render() {
        return (
            <div>

                {/** BodyFit */}
                <section className="ftco-counter">
                    <div className="container">
                        <div className="row">
                            <div className="offset-lg-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="block-18 text-center">
                                    <div className="text">
                                        <div className="icon">
                                            <span> <img width="50%" height="100%" src={require("Assets/image/icon/award.png")} alt="Time" /> </span>
                                        </div>
                                        <strong className="number" data-number="2000">2,000</strong>
                                        <span>Happy Customers</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="block-18 text-center">
                                    <div className="text">
                                        <div className="icon">
                                            <span> <img width="50%" height="100%" src={require("Assets/image/icon/time.png")} alt="Time" /> </span>
                                        </div>
                                        <strong className="number" data-number="240">240</strong>
                                        <span>Working Hours /Month</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default Customers;