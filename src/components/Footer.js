import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>

                <footer class="ftco-footer ftco-section img">
                    <div class="overlay"></div>
                    <div class="container">
                        <div class="row mb-5">
                            <div class="col-lg-4 col-md-6 mb-5 mb-md-5"></div>
                            <div class="col-lg-4 col-md-6 mb-5 mb-md-5">
                                <div class="ftco-footer-widget mb-4">
                                    <h2 class="ftco-heading-2">About Us</h2>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                        <li class="ftco-animate fadeInUp ftco-animated"><a href="#"><span class="icon-twitter"></span></a></li>
                                        <li class="ftco-animate fadeInUp ftco-animated"><a href="#"><span class="icon-facebook"></span></a></li>
                                        <li class="ftco-animate fadeInUp ftco-animated"><a href="#"><span class="icon-instagram"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 mb-5 mb-md-5">
                                <div class="ftco-footer-widget mb-4">
                                    <h2 class="ftco-heading-2">Have a Questions?</h2>
                                    <div class="block-23 mb-3">
                                        <ul>
                                            <li><span class="icon icon-map-marker"></span><span class="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                                            <li><a href="#"><span class="icon icon-phone"></span><span class="text">+2 392 3929 210</span></a></li>
                                            <li><a href="#"><span class="icon icon-envelope"></span><span class="text">info@yourdomain.com</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

                Copyright © {new Date().getFullYear()} <b>Bharat Jograna</b> All Rights Reserved.
            </div>
        );
    }
}

export default Footer;