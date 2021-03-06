/**
 * Developed By: Bharat Jograna
 * Created on: 03 Nov 2019
 * Class Component: classes page
 */
import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Membership from './Membership';
import Training from './Training';

class index extends Component {
    render() {
        return (
            <div className="pricepage">


                <Header {...this.props} />


                <section class="ftco-section">
                    <div class="container">
                        <div class="row">

                            <Membership />

                            <Training />

                        </div>
                    </div>
                </section>


                <Footer />


            </div>
        );
    }
}

export default index;