import React, { Component } from 'react';

class Photos extends Component {
    render() {
        return (
            <div>

                <section class="ftco-gallery">
                    <div class="container-wrap">
                        <div class="row no-gutters">
                            <div class="col-md-3 ftco-animate fadeInUp ftco-animated">
                                {/* <img src={require('Assets/image/gallery-1.jpg')} /> */}
                                <a href="gallery.html" class="gallery img d-flex align-items-center" >
                                    <div class="icon mb-4 d-flex align-items-center justify-content-center">
                                        <span class="icon-search">
                                        </span>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-3 ftco-animate fadeInUp ftco-animated">
                                <a href="gallery.html" class="gallery img d-flex align-items-center" style={{ backgroundImage: 'Assets/image/gallery-2.jpg' }}>
                                    <div class="icon mb-4 d-flex align-items-center justify-content-center">
                                        <span class="icon-search"></span>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-3 ftco-animate fadeInUp ftco-animated">
                                <a href="gallery.html" class="gallery img d-flex align-items-center" style={{ backgroundImage: 'Assets/image/gallery-3.jpg' }}>
                                    <div class="icon mb-4 d-flex align-items-center justify-content-center">
                                        <span class="icon-search"></span>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-3 ftco-animate fadeInUp ftco-animated">
                                <a href="gallery.html" class="gallery img d-flex align-items-center" style={{ backgroundImage: 'Assets/image/gallery-4.jpg' }}>
                                    <div class="icon mb-4 d-flex align-items-center justify-content-center">
                                        <span class="icon-search"></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default Photos;