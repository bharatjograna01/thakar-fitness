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
                                        One of the big advantages of joining a gym is the wide array of
                                        equipment available, including cardio machines, strength machines,
                                        weights, boxing kits and various functional training gear (TRX, fit
                                        balls, resistance bands etc). It might be intimidating at first, but
                                        you’ll find friendly experts on hand to help you use it all. Trust us
                                        – it’s all a lot simpler than it looks!
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
                                                    <span> <img width="100%" height="100%" src={require("Assets/image/icon/body.png")} alt="Body Build" /> </span>
                                                </div>
                                                <h3><a href="javascript:void(0)">Body Building</a></h3>
                                                <p>
                                                    we wil help you to progressive resistance exercise to control
                                                    and develop your musculature for aesthetic purposes.
                                                </p>
                                            </div>
                                            <div class="single_feature_item">
                                                <div class="feature_item_icon">
                                                    <span> <img width="100%" height="100%" src={require("Assets/image/icon/zumba.png")} alt="Zumba" /> </span>
                                                </div>
                                                <h3><a href="javascript:void(0)">Zumba Dance</a></h3>
                                                <p>
                                                    Zumba is a "fun and effective" dance fitness class that provides
                                                    "A total workout, combining all elements of fitness – cardio, muscle
                                                    conditioning, balance and flexibility, boosted energy and a serious
                                                    dose of awesome each time you leave class."
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="about_img">
                                    <img src={require("Assets/image/about_bg.png")} alt="Join Us" />
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="our_feature">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="single_feature_item">
                                                <div class="feature_item_icon">
                                                    <span> <img width="100%" height="100%" src={require("Assets/image/icon/cardio.png")} alt="Cardio" /> </span>
                                                </div>
                                                <h3> <a href="javascript:void(0)">Cardio Training</a></h3>
                                                <p>
                                                    Cardio exercise is any kind of aerobic activity that increases
                                                    your heart rate for a sustained length of time. Ideally, you want
                                                    to keep your heart rate moderately high and at a steady rate for at
                                                    least 30 minutes per day. we have also cardio exercises.
                                                </p>
                                            </div>
                                            <div class="single_feature_item">
                                                <div class="feature_item_icon">
                                                    <span> <img width="100%" height="100%" src={require("Assets/image/icon/weight.png")} alt="Weight Lift" /> </span>
                                                </div>
                                                <h3><a href="javascript:void(0)">Weight Lifting</a></h3>
                                                <p>
                                                    Lifting weights can help you build muscle mass, that muscle
                                                    mass will in turn help you lose fat mass.
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