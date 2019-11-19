/**
 * Developed By: Bharat Jograna
 * Created on: 03 Nov 2019
 * Class Component: WhyChoose section of home page
 */
import React, { Component } from 'react';

class WhyChoose extends Component {
    render() {
        return (
            <div>

                {/** Why choose Us section of home page is starts from here */}
                <section class="our_feature">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-6">
                                <div class="section_tittle text-center">
                                    <h2>Why You Should Choose Us</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3 col-md-3 col-sm-6 col-12">
                                <div class="single_feature">
                                    <img src={require('Assets/image/feature_icon_1.png')} alt="Trainer" />
                                    <h4>Qualified Trainers</h4>
                                    <p>
                                        Trainer have a basic knowledge that is appropriate
                                        to help members practice gym ball safely with high-quality exercise
                                        to achieve the goal of the training.
                                    </p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-6 col-6">
                                <div class="single_feature">
                                    <img src={require('Assets/image/feature_icon_2.png')} alt="Timeframe" />
                                    <h4>Flexible Timeframe</h4>
                                    <p>
                                        we provide Flexible time to our member.
                                    </p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-6 col-6">
                                <div class="single_feature">
                                    <img src={require('Assets/image/feature_icon_3.png')} alt="Equipment" />
                                    <h4>fTons of Equipment</h4>
                                    <p>
                                        we have wide range of Equipment to exercise every member.
                                    </p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-6 col-12">
                                <div class="single_feature">
                                    <img src={require('Assets/image/feature_icon_4.png')} alt="Price" />
                                    <h4>Affordable Price</h4>
                                    <p>
                                        Price is also Affordable so every member can afford a gym membership.
                                    </p>
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