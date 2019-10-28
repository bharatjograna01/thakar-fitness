import React, { Component } from 'react';

class WhyJoin extends Component {
    render() {
        return (
            <div>

                {/** FitZone service */}
                <section class="about_us section_padding">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-md-8 col-xl-6">
                                <div class="section_tittle">
                                    <p>Awesome feature</p>
                                    <h2>Why you Join with us</h2>
                                    <span>
                                        Stars fowl deep she greater bearing to seed dont is let you're
                                        appear first thing saying
                                        it years abundantly fowl tree you shall also
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-between">
                            <div class="col-lg-4">
                                <div class="our_feature">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="single_feature_item">
                                                <div class="feature_item_icon">
                                                    <span class="flaticon-footwear"></span>
                                                </div>
                                                <h3><a href="#">Qualified Instructor</a></h3>
                                                <p>
                                                    Stars fowl deep she greater bearing to seed dont is let you're
                                                    appear first thing
                                                    saying it years abundantly fowl tree you shall
                                                </p>
                                            </div>
                                            <div class="single_feature_item">
                                                <div class="feature_item_icon">
                                                    <span> <img src="img/icon/icon.svg" alt="icon" /> </span>
                                                </div>
                                                <h3><a href="#">fTons of Equipment</a></h3>
                                                <p>
                                                    Stars fowl deep she greater bearing to seed dont is let you're
                                                    appear first thing
                                                    saying it years abundantly fowl tree you shall
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="about_img">
                                    <img src={require("Assets/image/about_bg.png")} alt="#" />
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="our_feature">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="single_feature_item">
                                                <div class="feature_item_icon">
                                                    <span class="flaticon-gym-1"></span>
                                                </div>
                                                <h3> <a href="#"> Ralaxation &amp; Meditation</a></h3>
                                                <p>
                                                    Stars fowl deep she greater bearing to seed dont is let you're
                                                    appear first thing
                                                    saying it years abundantly fowl tree you shall
                                                </p>
                                            </div>
                                            <div class="single_feature_item">
                                                <div class="feature_item_icon">
                                                    <span class="flaticon-strong"></span>
                                                </div>
                                                <h3><a href="">Happy Member</a></h3>
                                                <p>
                                                    Stars fowl deep she greater bearing to seed dont is let you're
                                                    appear first thing
                                                    saying it years abundantly fowl tree you shall
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="overlay_icon">
                        <img src={require("Assets/image/icon_1.png")} class="amitated_icon_1" alt="animate_icon" />
                        <img src={require("Assets/image/icon_2.png")} class="amitated_icon_2" alt="animate_icon" />
                        <img src={require("Assets/image/icon_3.png")} class="amitated_icon_3" alt="animate_icon" />
                        <img src={require("Assets/image/icon_4.png")} class="amitated_icon_4" alt="animate_icon" />
                        <img src={require("Assets/image/icon_5.png")} class="amitated_icon_5" alt="animate_icon" />
                    </div>
                </section>

            </div>
        );
    }
}

export default WhyJoin;