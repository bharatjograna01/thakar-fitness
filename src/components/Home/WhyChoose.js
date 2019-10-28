import React, { Component } from 'react';

class WhyChoose extends Component {
    render() {
        return (
            <div>

                {/** FitFloss */}
                <section class="our_feature section_padding">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-6">
                                <div class="section_tittle text-center">
                                    <h2>Why You Should Choose Us</h2>
                                    <p>As you pour the first glass of your favorite Chianti or Chardonnay and settle into an intimate Friday evening.</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3 col-sm-6">
                                <div class="single_feature">
                                    <img src={require('Assets/image/feature_icon_1.png')} alt="#" />
                                    <h4>Quality Training</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="single_feature">
                                    <img src={require('Assets/image/feature_icon_2.png')} alt="#" />
                                    <h4>Flexible Timeframe</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="single_feature">
                                    <img src={require('Assets/image/feature_icon_3.png')} alt="#" />
                                    <h4>Qualified Trainers</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="single_feature">
                                    <img src={require('Assets/image/feature_icon_4.png')} alt="#" />
                                    <h4>Affordable Price</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default WhyChoose;