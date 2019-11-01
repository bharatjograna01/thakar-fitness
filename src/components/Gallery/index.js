import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import ImageSlider from './ImageSlider';

class index extends Component {
    render() {
        return (
            <div>


                <Header {...this.props} />


                <ImageSlider />


                <Footer />


            </div>
        );
    }
}

export default index;