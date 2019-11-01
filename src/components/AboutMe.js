import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class AboutMe extends Component {
    render() {
        return (
            <div>


                <Header {...this.props} />


                <section>
                    <div class="container">
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



                <Footer />


            </div>
        );
    }
}

export default AboutMe;