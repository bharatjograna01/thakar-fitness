import React, { Component } from 'react';

class Customers extends Component {
    render() {
        return (
            <div>

                {/** BodyFit */}
                {/* <section class="ftco-counter ftco-bg-dark img" id="section-counter" style="background-image: url(&quot;images/bg_5.jpg&quot;); background-position: 50% -174.85px;" data-stellar-background-ratio="0.5"> */}
                <section class="ftco-counter img" id="section-counter">
                    <div class="overlay"></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-md-10">
                                <div class="row">
                                    <div class="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                                        <div class="block-18 text-center">
                                            <div class="text">
                                                <div class="icon"><span class="flaticon-coffee-cup"></span></div>
                                                <strong class="number" data-number="5000">5,000</strong>
                                                <span>Happy Customers</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                                        <div class="block-18 text-center">
                                            <div class="text">
                                                <div class="icon"><span class="flaticon-coffee-cup"></span></div>
                                                <strong class="number" data-number="4560">4,560</strong>
                                                <span>Perfect Bodies</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                                        <div class="block-18 text-center">
                                            <div class="text">
                                                <div class="icon"><span class="flaticon-coffee-cup"></span></div>
                                                <strong class="number" data-number="570">570</strong>
                                                <span>Working Hours</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                                        <div class="block-18 text-center">
                                            <div class="text">
                                                <div class="icon"><span class="flaticon-coffee-cup"></span></div>
                                                <strong class="number" data-number="900">900</strong>
                                                <span>Success Stories</span>
                                            </div>
                                        </div>
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