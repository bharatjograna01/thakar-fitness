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
                                <div class="lifestyle-img">
                                    <img src={require("Assets/image/lifestyle.jpg")} alt="lifestyle And Diet" />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="lifestyle-text">
                                    <div class="section-title">
                                        <h2>Lifestyle &amp; Diet</h2>
                                        <p>
                                            Combining good nutrition with physical activity can lead to a healthier lifestyle. Give your
                                            body the nutrients it needs by eating a variety of nutrient-packed food, including whole
                                            grains, lean protein, fruits and vegetables, and low-fat or fat-free dairy. we will provide
                                            Diet plan to our member.
                                        </p>
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

export default Diet;