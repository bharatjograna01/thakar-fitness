/**
 * Developed By: Bharat Jograna
 * Created on: 03 Nov 2019
 * Class Component: Diet section of home page
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ManyMore extends Component {
    render() {
        return (
            <div>

                {/** become a member section of home page is starts from here */}
                <section class="become_member section_padding">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-7 col-12">
                                <div>
                                    <h2>Many more Features are Waiting...!</h2>
                                    <p>Thinking about to join GYM ? Have you put any thought in your mind the best places to join ?</p>
                                    <Link to="/Classes" class="btn_1">Become a Member</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default ManyMore;