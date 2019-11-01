import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>

                <footer class="ftco-footer ftco-section img">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-6">
                                <img width='70%' height="95%" src={require('Assets/image/icon/logofinal.png')} alt="logo" />
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="ftco-footer-widget mb-4">
                                    <h2 class="ftco-heading-2">About Us</h2>
                                    <p>We do this by helping you find the most suitable equipment for your home gym, studio or commercial gym, keeping your budget, lifestyle and fitness goals in mind. We stock a wide range of gym equipment, with strength equipment, cardio and so much more.</p>
                                    <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                        <li><a href="javascript:void(0)"><span class="zmdi zmdi-whatsapp"></span></a></li>
                                        <li><a href="javascript:void(0)"><span class="zmdi zmdi-facebook"></span></a></li>
                                        <li><a href="javascript:void(0)"><span class="zmdi zmdi-instagram"></span></a></li>
                                        {/* <li><a href="javascript:void(0)"><span class="zmdi zmdi-lamp"></span></a></li> */}
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="ftco-footer-widget mb-4">
                                    <h2 class="ftco-heading-2">Contact Us</h2>
                                    <div class="block-23 mb-3">
                                        <ul>
                                            <li><span class="zmdi zmdi-pin"></span><span class="text pl-30">1st Floor, Sai Point, Yogeshwar Nagar, Main Road, Chalthan, Surat, Gujarat 394305</span></li>
                                            <li><a href="javascript:void(0)"><span class="zmdi zmdi-phone"></span><span class="text pl-30">+91 95740 51010</span></a></li>
                                            <li><a href="javascript:void(0)"><span class="zmdi zmdi-email"></span><span class="text pl-30">thakarfitness55@gmail.com</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

                <div className="copyright">
                    {/* <a href="/AboutMe"> */}
                    <a href="/">
                        <span>
                            Copyright © {new Date().getFullYear()} <b>Bharat Jograna</b> All Rights Reserved.
                    </span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Footer;