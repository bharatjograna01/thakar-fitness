import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Customers from './Customers'
import Welcome from './Welcome';
import Review from './Review';
import Programm from './Programm';
import Service from './Service';

class index extends Component {
    render() {
        return (
            <div>


                <Header />


                <Welcome />


                <Programm />


                <Service />


                <Review />


                {/* <Photos /> */}


                <Customers />


                <Footer />


            </div>
        );
    }
}

export default index;