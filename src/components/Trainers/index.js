import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Trainers from './Trainers';

class index extends Component {
    render() {
        return (
            <div className="trainerpage">


                <Header {...this.props} />


                <Trainers />


                <Footer />


            </div>
        );
    }
}

export default index;