import React, { Component } from 'react';

import SliderImage from './SliderImage'

class Welcome extends Component {

    render() {
        return (
            <div>

                {/** bodyfit */}
                <section className="ftco-about d-md-flex">
                    <div className="container">
                        <div className=" col-12 text-center">
                            <div>
                                <h2 className="mb-4">Welcome to <span>THAKAR-Fitness</span></h2>
                            </div>
                            <div>
                                <p>We want to help you live a fit and healthy lifestyle! We do this by helping you find the most suitable equipment for your home gym, studio or commercial gym, keeping your budget, lifestyle and fitness goals in mind. We stock a wide range of gym equipment, with strength equipment, cardio, cross training and so much more. Our awesome team is always keen to help, so please call us to discuss your needs.</p>
                            </div>
                        </div>
                        <div className="col-11 ml-auto">
                            <SliderImage />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Welcome;