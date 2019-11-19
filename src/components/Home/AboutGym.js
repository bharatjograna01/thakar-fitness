/**
 * Developed By: Bharat Jograna
 * Created on: 03 Nov 2019
 * Class Component: AboutGym section of home page
 */
import React, { Component } from 'react';

class AboutGym extends Component {
    render() {
        return (
            <div>

                {/** Instruction section of home page is starts from here */}
                <div class="site-section">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-5 col-12">
                                <h2 class="mb-3 text-uppercase">All About <strong class="text-black font-weight-bold">Our Gym</strong></h2>
                                <ul class="site-block-check">

                                    <li>
                                        Rights Of Admission Reserved
                                    </li>

                                    <li>
                                        THAKAR Fitness is open to members of all
                                        communities sgective Of their caste Or creed
                                    </li>

                                    <li>
                                        THAKAR Fitness has the right to enforce rules and
                                        regulations me to time and they are subject to change
                                        according prevailing condition in the center. A notice
                                        put up On notice board will be deemed to have been
                                        served on members
                                    </li>

                                    <li>
                                        Available for usage to members may be irH:reased/
                                        sed as per circumstances/availabity
                                    </li>

                                    <li>
                                        Time available for usage/training can be increase
                                        decreased as per circumstances/availabllty
                                    </li>

                                    <li>
                                        Outside footwear will not be allowed in the gym hall.
                                        members are requested to carry their own towel and
                                        drinking Water for hygienic reason.
                                    </li>

                                    <li>
                                        Results Of the various training programs, classes
                                        specialized programs vary form person to person.
                                    </li>

                                    <li>
                                        Members should maintain compete silence in the gym
                                        premisses.
                                    </li>

                                    <li>
                                        Use of mobile phone inside Gym hall is strictly
                                        prohibited and in the Other areas 01 Fitness
                                        is should be kept in silent mode.
                                    </li>

                                    <li>
                                        Members are not allowed to bring any child or animal'
                                        bi etc, in the club.
                                    </li>

                                    <li>
                                        Members are not allowed to bring and not to accom -
                                        pany any person on the gym floor who is not a
                                        member Of the gym.
                                    </li>

                                </ul>
                            </div>
                            <div class="col-lg-6 col-12 ml-auto">
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