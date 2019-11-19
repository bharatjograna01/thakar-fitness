/**
 * Developed By: Bharat Jograna
 * Created on: 03 Nov 2019
 * Class Component: WhyJoin section of home page
 */
import React, { Component } from 'react';

class WhyJoin extends Component {
    render() {
        return (
            <div>

                {/** Why Join Us section of home page is starts from here */}
                <section className="about_us section_padding">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-xl-6">
                                <div className="section_tittle">
                                    <h2>Why you Join with us</h2>
                                    <p>Awesome feature</p>
                                    <span>
                                        One of the biggest advantages of joining our gym is the wide array of
                                        equipment available, including cardio machines, strength machines,
                                        weights, boxing kits and various functional training gear (TRX, fit
                                        balls, resistance bands etc). It might be intimidating at first, but
                                        you’ll find friendly experts on hand to help you use it all. Trust us
                                        – it’s all a lot simpler than it looks!
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-6 single_feature_item">
                                            <div className="feature_item_icon row">
                                                <span> <img width="100%" height="100%" src={require("Assets/image/icon/body.png")} alt="Body Build" /> </span>
                                                <h3 className="pl-30"><a href="javascript:void(0)">Body Building</a></h3>
                                            </div>
                                            <p>
                                                we wil help you to progressive resistance exercise to control
                                                and develop your musculature for aesthetic purposes.
                                                </p>
                                        </div>
                                        <div className="col-lg-12 col-md-6 single_feature_item">
                                            <div className="feature_item_icon row">
                                                <span> <img width="100%" height="100%" src={require("Assets/image/icon/zumba.png")} alt="Zumba" /> </span>
                                                <h3 className="pl-30"><a href="javascript:void(0)">Zumba Dance</a></h3>
                                            </div>
                                            <p>
                                                Zumba is a "fun and effective" dance fitness className that provides
                                                "A total workout, combining all elements of fitness – cardio, muscle
                                                conditioning, balance and flexibility, boosted energy and a serious
                                                dose of awesome each time you leave className."
                                                </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="about_img">
                                    <img src={require("Assets/image/about_bg.png")} alt="Join Us" />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-6 single_feature_item">
                                            <div className="feature_item_icon row">
                                                <span> <img width="100%" height="100%" src={require("Assets/image/icon/cardio.png")} alt="Cardio" /> </span>
                                                <h3 className="pl-30"> <a href="javascript:void(0)">Cardio Training</a></h3>
                                            </div>
                                            <p>
                                                Cardio exercise is any kind of aerobic activity that increases
                                                your heart rate for a sustained length of time. Ideally, you want
                                                to keep your heart rate moderately high and at a steady rate for at
                                                least 30 minutes per day. we have also cardio exercises.
                                                </p>
                                        </div>
                                        <div className="col-lg-12 col-md-6 single_feature_item">
                                            <div className="feature_item_icon row">
                                                <span> <img width="100%" height="100%" src={require("Assets/image/icon/weight.png")} alt="Weight Lift" /> </span>
                                                <h3 className="pl-30"><a href="javascript:void(0)">Weight Lifting</a></h3>
                                            </div>
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
                    <div>
                        <img src={require("Assets/image/icon_1.png")} className="amitated_icon_1" alt="animate_icon" />
                        <img src={require("Assets/image/icon_2.png")} className="amitated_icon_2" alt="animate_icon" />
                        <img src={require("Assets/image/icon_3.png")} className="amitated_icon_3" alt="animate_icon" />
                        <img src={require("Assets/image/icon_4.png")} className="amitated_icon_4" alt="animate_icon" />
                        <img src={require("Assets/image/icon_5.png")} className="amitated_icon_5" alt="animate_icon" />
                    </div>
                </section>

            </div>
        );
    }
}

export default WhyJoin;