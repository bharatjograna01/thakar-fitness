/**
 * Developed By: Bharat Jograna
 * Created on: 03 Nov 2019
 * Class Component: Footer of project
 */
import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>

                {/** Footer section of pages starts from here */}
                <div className="ftco-footer ftco-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-7 col-sm-8 col-12 text-center ml-auto mr-auto">
                                <img width='85%' height="95%" src={require('Assets/image/icon/logofinal.png')} alt="logo" />
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="ftco-footer-widget">
                                    <h2 className="text-center">About Us</h2>
                                    <p>We do this by helping you find the most suitable equipment for your home gym, studio or commercial gym, keeping your budget, lifestyle and fitness goals in mind. We stock a wide range of gym equipment, with strength equipment, cardio and so much more.</p>
                                    <ul className="ftco-footer-social list-unstyled text-center mt-5">
                                        <li><a href="javascript:void(0)"><span className="zmdi zmdi-whatsapp"></span></a></li>
                                        <li><a href="javascript:void(0)"><span className="zmdi zmdi-facebook"></span></a></li>
                                        <li><a href="javascript:void(0)"><span className="zmdi zmdi-instagram"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="ftco-footer-widget mb-4">
                                    <h2 className="text-center">Contact Us</h2>
                                    <div className="block-23 mb-3">
                                        <ul>
                                            <li><span className="zmdi zmdi-pin"></span><span className="text pl-30">1st Floor, Sai Point, Yogeshwar Nagar, Main Road, Chalthan, Surat, Gujarat 394305</span></li>
                                            <li><a href="javascript:void(0)"><span className="zmdi zmdi-phone"></span><span className="text pl-30">+91 95740 51010</span></a></li>
                                            <li><a href="javascript:void(0)"><span className="zmdi zmdi-email"></span><span className="text pl-30">thakarfitness55@gmail.com</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    <a href="/AboutMe">
                        <span>
                            Bharat Jograna © {new Date().getFullYear()} All Rights Reserved.
                    </span>
                    </a>
                </div>
            </footer>
        );
    }
}

export default Footer;