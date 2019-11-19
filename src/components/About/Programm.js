import React, { Component } from 'react';

class Programm extends Component {
    render() {
        return (
            <div>

                {/** bodyFit */}
                <section className="ftco-section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12 pb-30">
                                <div className="heading-section text-md-right">
                                    <h2 className="mb-5">Fitness Programs</h2>
                                    <p className="mb-5">A fitness program is no more than defining your exercise and nutritional program, setting your personal fitness goals, and then executing upon your plan. The fact that you have made the decision to take an active approach to your personal fitness and begin a fitness program is the first step.</p>
                                    <p><a href="javascript:void(0)" className="btn btn-primary btn-outline-primary px-4 py-3">View Full Programs</a></p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="program d-flex">
                                    <div className="icon d-flex">
                                        <span> <img width="100%" height="100%" src={require("Assets/image/icon/body.png")} alt="Body Build" /> </span>
                                    </div>
                                    <div className="text ml-5">
                                        <h3>Body Building</h3>
                                        <p>
                                            we wil help you to progressive resistance exercise to control
                                            and develop your musculature for aesthetic purposes.
                                        </p>
                                    </div>
                                </div>
                                <div className="program d-flex">
                                    <div className="icon d-flex">
                                        <span> <img width="100%" height="100%" src={require("Assets/image/icon/weight.png")} alt="Weight Lift" /> </span>
                                    </div>
                                    <div className="text ml-5">
                                        <h3>Weight Lifting</h3>
                                        <p>
                                            Lifting weights can help you build muscle mass, that muscle
                                            mass will in turn help you lose fat mass.
                                        </p>
                                    </div>
                                </div>
                                <div className="program d-flex">
                                    <div className="icon d-flex">
                                        <span> <img width="100%" height="100%" src={require("Assets/image/icon/cardio.png")} alt="Cardio" /> </span>
                                    </div>
                                    <div className="text ml-5">
                                        <h3>Cardio Training</h3>
                                        <p>
                                            Cardio exercise is any kind of aerobic activity that increases
                                            your heart rate for a sustained length of time. Ideally, you want
                                            to keep your heart rate moderately high and at a steady rate for at
                                            least 30 minutes per day. we have also cardio exercises.
                                        </p>
                                    </div>
                                </div>
                                <div className="program d-flex">
                                    <div className="icon d-flex">
                                        <span> <img width="100%" height="100%" src={require("Assets/image/icon/zumba.png")} alt="Zumba" /> </span>
                                    </div>
                                    <div className="text ml-5">
                                        <h3>Zumba Classes</h3>
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
                </section>



            </div>
        );
    }
}

export default Programm;