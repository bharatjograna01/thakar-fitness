import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Schedule from './Schedule';

class index extends Component {
    render() {
        return (
            <div>


                <Header {...this.props} />


                <Schedule />


                <Footer />


            </div>
        );
    }
}

export default index;