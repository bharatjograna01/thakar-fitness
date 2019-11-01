import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return (
            <div>

                {/** bodyfit */}
                <section class="ftco-about d-md-flex">
                    <div class="one-half img" style={{ backgroundImage: `url(${require(`Assets/image/bg/welcome.jpg`)})` }}>
                        {/* <a href={require("Assets/image/gallery/VID-20191029-WA0042.mp4")} class="icon popup-vimeo d-flex justify-content-center align-items-center"> */}
                        {/* <video ref="vidRef" src={require("Assets/image/gallery/VID-20191029-WA0042.mp4")} type="video/mp4"></video> */}
                        <span class="zmdi zmdi-play"></span>
                        {/* </a> */}

                    </div>
                    <div class="one-half">
                        <div class="heading-section">
                            <h2 class="mb-4">Welcome to <span>THAKAR-Fitness</span></h2>
                        </div>
                        <div>
                            <p>We want to help you live a fit and healthy lifestyle! We do this by helping you find the most suitable equipment for your home gym, studio or commercial gym, keeping your budget, lifestyle and fitness goals in mind. We stock a wide range of gym equipment, with strength equipment, cardio, cross training and so much more. Our awesome team is always keen to help, so please call us to discuss your needs.</p>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default Welcome;