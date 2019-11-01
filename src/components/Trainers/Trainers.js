import React, { Component } from 'react';

class Trainers extends Component {
    render() {
        return (
            <div>

                {/** bodyfit */}
                <section class="ftco-section">
                    <div class="container">
                        <div class="row justify-content-center mb-5">
                            <div class="col-md-7 heading-section text-center">
                                <h2 class="mb-4">Our Coache</h2>
                                {/* <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p> */}
                            </div>
                        </div>
                        <div class="offset-3 col-7">
                            <div class="d-flex">
                                <div class="coach d-sm-flex align-items-stretch">
                                    <div class="img mr-30" style={{ backgroundImage: `url(${require(`Assets/image/trainer-1.jpg`)})`, width: "50%", height: "100%" }}></div>
                                    <div class="text py-4 px-5">
                                        <span class="subheading">Head Coach</span>
                                        <h3><span>Bhavesh visave</span></h3>
                                        <li>IFSA sertified</li>
                                        <li>Mr. South Gujrat 2016-17(2nd place)</li>
                                        <li>Mr. Gujrat 2016-17(2nd place)</li>
                                        <li>Mr. South Gujrat 2017-18(2nd place)</li>
                                        <li>Mr. Gujrat 2017-18(2nd place)</li>
                                        <li>Fit Factor India 2018(overall india top 10)</li>
                                        <li>Boss Classic 2019(2nd place)</li>
                                        {/* <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p> */}
                                        <ul class="ftco-social-media d-flex mt-4">
                                            <li><a href="javascript:void(0)" class="mr-2 d-flex justify-content-center align-items-center"><span class="zmdi zmdi-twitter"></span></a></li>
                                            <li><a href="javascript:void(0)" class="mr-2 d-flex justify-content-center align-items-center"><span class="zmdi zmdi-facebook"></span></a></li>
                                            <li><a href="javascript:void(0)" class="mr-2 d-flex justify-content-center align-items-center"><span class="zmdi zmdi-instagram"></span></a></li>
                                        </ul>
                                        <p></p>
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

export default Trainers;