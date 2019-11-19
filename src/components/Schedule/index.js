/**
 * Developed By: Bharat Jograna
 * Created on: 03 Nov 2019
 * Class Component: schedule page
 */
import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Begginner from './Begginner';
import Intermediate from './Intermediate';
import Advance from './Advance';
import Cardio from './Cardio';

class index extends Component {
    render() {
        return (
            <div>


                <Header {...this.props} />


                <Begginner />


                <Intermediate />


                <Advance />


                <Cardio />


                <Footer />


            </div>
        );
    }
}

export default index;