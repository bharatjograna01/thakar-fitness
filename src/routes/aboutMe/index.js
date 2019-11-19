/**
 * Developed By: Bharat Jograna
 * Created on: 03 Nov 2019
 * Class Component: app to route project in aboutMe page
 */
import React, { Component, Fragment } from 'react';
import Appwdgt from '../../components/AboutMe';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Appwdgt {...this.props} />
            </Fragment>
        );
    }
}

export default App;