import React, { Component } from 'react';

class Review extends Component {
    render() {
        return (
            <div>
                <section class="ftco-section img" id="ftco-testimony" style={{ backgroundImage: ('&quotimages/bg_2.jpg&quot'), backgroundPosition: '50% -329.25px' }} data-stellar-background-ratio="0.5">
                    <div class="overlay"></div>
                    <div class="container">
                        <div class="row justify-content-center mb-5">
                            <div class="col-md-7 heading-section text-center">
                                <span class="subheading">Testimony</span>
                                <h2 class="mb-4">Customers Says</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                        </div>
                    </div>
                    <div class="container-wrap">
                        <div class="row d-flex no-gutters">
                            <div class="col-lg align-self-sm-end">
                                <div class="testimony">
                                    <blockquote>
                                        <p>“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small.”</p>
                                    </blockquote>
                                    <div class="author d-flex mt-4">
                                        <div class="image mr-3 align-self-center">
                                            <img src={require("Assets/image/person_1.jpg")} alt="" />
                                        </div>
                                        <div class="align-self-center">Louise Kelly <span class="position">Illustrator Designer</span></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg align-self-sm-end">
                                <div class="testimony overlay">
                                    <blockquote>
                                        <p>“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the of Lorem Ipsum decided to leave for the far World of Grammar.”</p>
                                    </blockquote>
                                    <div class="author d-flex mt-4">
                                        <div class="image mr-3 align-self-center">
                                            <img src={require("Assets/image/person_2.jpg")} alt="" />
                                        </div>
                                        <div class="align-self-center">Louise Kelly <span class="position">Illustrator Designer</span></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg align-self-sm-end">
                                <div class="testimony">
                                    <blockquote>
                                        <p>“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small  line of blind text by the name. ”</p>
                                    </blockquote>
                                    <div class="author d-flex mt-4">
                                        <div class="image mr-3 align-self-center">
                                            <img src={require("Assets/image/person_3.jpg")} alt="" />
                                        </div>
                                        <div class="align-self-center">Louise Kelly <span class="position">Illustrator Designer</span></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg align-self-sm-end">
                                <div class="testimony overlay">
                                    <blockquote>
                                        <p>“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however.”</p>
                                    </blockquote>
                                    <div class="author d-flex mt-4">
                                        <div class="image mr-3 align-self-center">
                                            <img src={require("Assets/image/person_2.jpg")} alt="" />
                                        </div>
                                        <div class="align-self-center">Louise Kelly <span class="position">Illustrator Designer</span></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg align-self-sm-end">
                                <div class="testimony">
                                    <blockquote>
                                        <p>“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small  line of blind text by the name. ”</p>
                                    </blockquote>
                                    <div class="author d-flex mt-4">
                                        <div class="image mr-3 align-self-center">
                                            <img src={require("Assets/image/person_3.jpg")} alt="" />
                                        </div>
                                        <div class="align-self-center">Louise Kelly <span class="position">Illustrator Designer</span></div>
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

export default Review;