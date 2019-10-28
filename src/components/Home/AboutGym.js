import React, { Component } from 'react';

class AboutGym extends Component {
    render() {
        return (
            <div>

                {/** IronFirst */}
                <div class="site-section">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-md-12 col-lg-5 mb-5 mb-lg-0">
                                <h2 class="mb-3 text-uppercase">All About <strong class="text-black font-weight-bold">Our Gym</strong></h2>
                                <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque accusamus, rerum illo facilis reiciendis.</p>
                                <p class="mb-4">Iste aut dolorem veritatis saepe nesciunt distinctio voluptas sapiente sunt perspiciatis autem minima, iure provident. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, quas.</p>
                                <ul class="site-block-check">
                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                                    <li>Nemo, voluptate? Voluptates odit, aperiam nostrum! Ipsa.</li>
                                    <li>Itaque voluptatum ducimus aliquam, est fuga molestiae?</li>
                                    <li>Accusamus porro at commodi delectus, nesciunt molestiae.</li>
                                </ul>
                                <p><a href="#" class="btn btn-primary pill px-4">Read More</a></p>
                            </div>
                            <div class="col-md-12 col-lg-6 ml-auto">
                                <img src={require("Assets/image/about.jpg")} alt="Image" class="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default AboutGym;