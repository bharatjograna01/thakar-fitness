import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import 'Assets/scss';

class MainApp extends Component {
    render() {
        return (
            <div className="row ml-0 mr-0">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 m-0 p-0">
                    <img width='100%' src={require('../src/assets/Banner01.jpg')} alt="THAKAR-Fitness" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 m-0 p-0">
                    <img width='100%' src={require('../src/assets/Banner02.jpg')} alt="THAKAR-Fitness" />
                </div>
            </div>
        );
    }
}

export default MainApp;