import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Diet from './Diet';
import WhyChoose from './WhyChoose';
import ManyMore from './ManyMore';
import WhyJoin from './WhyJoin';
import AboutGym from './AboutGym'

class index extends Component {
    render() {

        return (
            <div className="homepage">


                <Header {...this.props} />


                <WhyJoin />


                <WhyChoose />


                <Diet />


                <AboutGym />


                <ManyMore />


                <Footer />


            </div>
        );
    }
}

export default index;