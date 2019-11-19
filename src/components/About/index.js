/**
 * Developed By: Bharat Jograna
 * Created on: 03 Nov 2019
 * Class Component: aboute page
 */
import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Customers from './Customers'
import Welcome from './Welcome';
import Programm from './Programm';

class index extends Component {
    render() {
        return (
            <div className="aboutpage">


                <Header {...this.props} />


                <Welcome />


                <Programm />


                <Customers />


                <Footer />


            </div>
        );
    }
}

export default index;