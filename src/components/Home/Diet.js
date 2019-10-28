import React, { Component } from 'react';

class Diet extends Component {
    render() {
        return (
            <div>

                {/** CrossFit */}
                <section class="lifestyle-section spad">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="lifestyle-text">
                                    <div class="section-title">
                                        <h2>Lifestyle &amp; Diet</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                            ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                            viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                                            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                                facilisis. </p>
                                        <a href="#" class="primary-btn">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="lifestyle-img">
                                    <img src={require("../../assets/image/lifestyle.jpg")} alt="lifestyle And Diet" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default Diet;